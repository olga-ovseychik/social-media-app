import { supabase } from "@/shared/api/supabase";

export const uploadImage = async (uri: string) => {
  const response = await fetch(uri);
  const blob = await response.blob();
  const arrayBuffer = await new Response(blob).arrayBuffer();
  const fileName = `public/${Date.now()}.jpg`;

  const { error, data } = await supabase
    .storage
    .from('avatars')
    .upload(fileName, arrayBuffer, { contentType: 'image/jpeg', upsert: false });

  if (error) {
    console.error('Error uploading image: ', error);
  }

  return data?.fullPath ?? '';
}