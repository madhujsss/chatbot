import { supabase } from './supabase';

const fetchUsers = async () => {
  try {
    const { data, error } = await supabase
      .from('users')
      .select('*');

    if (error) throw error;

    return data;
  } catch (error) {
    console.error('Error fetching users:', error);
    return []; // Handle error gracefully (e.g., display error message)
  }
};

const fetchMessages = async () => {
  try {
    const { data, error } = await supabase
      .from('messages')
      .select('*');

    if (error) throw error;

    return data;
  } catch (error) {
    console.error('Error fetching messages:', error);
    return []; // Handle error gracefully
  }
};

// Integrate these functions in your ChatWindow component to fetch and display data
