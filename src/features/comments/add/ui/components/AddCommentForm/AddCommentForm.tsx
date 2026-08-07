import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useAppTheme } from "@/shared/hooks/useAppTheme";
import { schema, FormData } from "@/features/comments/add/model/add-comment.schema";
import { TextInput, View, Text, ActivityIndicator, TouchableOpacity } from "react-native";
import { useAddComment } from "@/features/comments/add/hooks/useAddComment";
import { styles } from './AddCommentForm.styles'
import { useAppSelector } from "@/store/hooks";
import { selectedProfile } from "@/store/slices/auth.slice";
import { useRef } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

type Props = {
  postId: number;
  userToReply?: string | null;
  parentId?: number;
  showForm?: boolean;
  setShowForm?: (value: boolean) => void;
}

export default function AddCommentForm({ postId, parentId, userToReply, showForm, setShowForm }: Props) {
  const theme = useAppTheme();
  const { addComment } = useAddComment();
  const user = useAppSelector(selectedProfile)
  const inputRef = useRef<TextInput>(null);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    defaultValues: {
      content: "",
    },
    resolver: zodResolver(schema),
    mode: 'onSubmit',
    reValidateMode: 'onChange'
  })

  const onSubmit = (data: FormData) => {
    if (!data.content) return

    const newData = {
      userId: user?.id!,
      postId,
      parentId: parentId ?? null,
      ...data,
    }

    addComment.mutate(newData, {
      onSuccess: () => {
        reset();
      },
      onError: (error) => {
        console.log('Mutation error:', error)
      }
    })
  }

  const handleCancel = () => {
    inputRef.current?.blur()
    if (showForm && setShowForm) setShowForm(false)
  }

  return (
    <View
      style={styles(theme).container}
      testID={'comment-form-container'}
    >
      {showForm && (
        <View style={styles(theme).replyToWrapper}>
          <Ionicons
            name='arrow-redo-outline'
            color={theme.accent}
            size={16}
          />
          <Text>Replying to {userToReply}</Text>
        </View>
      )}

      <View style={styles(theme).wrapper}>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles(theme).input}
              placeholder={`Type your ${parentId ? 'reply' : 'comment'} here`}
              onBlur={onBlur}
              onChangeText={(val) => { onChange(val) } }
              value={value}
              multiline
              numberOfLines={4}
              ref={inputRef}
            />
          )}
          name="content"
        />
        {!showForm && (
          <TouchableOpacity
            onPress={handleSubmit(onSubmit)}
            style={[styles(theme).button, styles(theme).sendButton,]}
          >
            <Text>
              {addComment.isPending
                ? <ActivityIndicator color={theme.highlight}/>
                : <Ionicons
                  name='paper-plane-outline'
                  color={theme.accent}
                  size={16}
                />
              }
            </Text>
          </TouchableOpacity>
        )}

        {showForm && (
          <View style={styles(theme).replyControlsWrapper}>
            <TouchableOpacity
              onPress={handleSubmit(onSubmit)}
              style={styles(theme).button}
            >
              <Text>
                {addComment.isPending
                  ? <ActivityIndicator color={theme.highlight}/>
                  : <Ionicons
                    name='paper-plane-outline'
                    color={theme.accent}
                    size={16}
                  />
                }
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleCancel}
              style={styles(theme).button}
              testID='form-cancel-button'
            >
              <Ionicons
                name='close'
                color={theme.accent}
                size={16}
              />
            </TouchableOpacity>
          </View>
        )}
      </View>

      <View>
        {errors.content && <Text style={styles(theme).warningText}>{errors.content.message}</Text>}
      </View>
    </View>
  )
}
