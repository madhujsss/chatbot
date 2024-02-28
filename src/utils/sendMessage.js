const sendMessage = async (newMessage) => {
    try {
      const { data, error } = await supabase
        .from('messages')
        .insert([
          {
            content: newMessage,
            sender: 'user', // Replace with actual sender logic
            // Add other message details if needed (e.g., timestamp)
          },
        ]);
  
      if (error) throw error;
  
      console.log('Message sent successfully:', data[0]);
    } catch (error) {
      console.error('Error sending message:', error);
      // Handle error gracefully (e.g., display error message)
    }
  };
  
  // Integrate this function in your ChatWindow component to handle message submission
  