<template>
  <div id="chat-container">
    <div id="messages">
      <div v-for="(message, index) in messages" :key="index" :class="['message', message.sender]">
        {{ message.content }}
      </div>
    </div>
    <div id="input-container">
      <input
        v-model="userInput"
        @keyup.enter="sendMessage"
        placeholder="Type a message..."
      />
      <button @click="sendMessage" :disabled="isSending">Send</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AIChat",
  data() {
    return {
      userInput: "",
      isSending: false,
      messages: [{ sender: "ai", content: "这里连的是我自己的token，求求你别乱问" }],
      apiUrl: "http://47.92.90.228:3009/api/chat", // Replace with actual API URL
      apiKey: "Bearer gOLsBVKCNPoLeDdnJtfo:quCaqUMNpyuG", // Replace with actual API key
    };
  },
  methods: {
    addMessage(content, sender) {
      this.messages.push({ sender, content });
      this.$nextTick(() => {
        const messagesContainer = this.$el.querySelector("#messages");
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
      });
    },
    async sendMessage() {
      const userMessage = this.userInput.trim();
      if (!userMessage) return;

      this.addMessage(userMessage, "user");
      this.userInput = "";
      this.isSending = true;

      const requestData = {
        model: "lite",
        user: "unique_user_id",
        messages: [
          { role: "system", content: "你是知识渊博的助理" },
          { role: "user", content: userMessage },
        ],
        temperature: 0.5,
        top_k: 4,
        stream: false,
        max_tokens: 1024,
        presence_penalty: 1,
        frequency_penalty: 1,
      };

      try {
        const response = await axios.post(this.apiUrl, requestData, {
          headers: {
            Authorization: this.apiKey,
            "Content-Type": "application/json",
          },
        });
        if (response.data.code === 0) {
          const aiMessage = response.data.choices[0].message.content || "AI response not available.";
          this.addMessage(aiMessage, "ai");
        } else {
          this.addMessage(`Error: ${response.data.message}`, "ai");
        }
      } catch (error) {
        this.addMessage(`Error: ${error.message}`, "ai");
      } finally {
        this.isSending = false;
      }
    },
  },
};
</script>

<style scoped>
#chat-container {
  width: 100%;
  max-width: 480px; /* Limit maximum width for larger screens */
  margin: 0 auto; /* Centered layout */
  padding: 15px;
  background-color: #f5f5f5;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  box-sizing: border-box; /* Ensure padding is included in width */
}

#messages {
  height: 60vh; /* Use viewport height for better adaptability */
  overflow-y: auto;
  border: 1px solid #bbdefb;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 15px;
  background: #ffffff;
  font-size: 14px;
  line-height: 1.6;
  color: #1e88e5;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.message {
  padding: 8px 12px;
  border-radius: 6px;
  max-width: 80%; /* Message bubble takes 80% of the container */
  display: inline-block;
  word-wrap: break-word;
}

.user {
  align-self: flex-end;
  color: #3949ab;
  background: #c5cae9;
}

.ai {
  align-self: flex-start;
  color: #283593;
  background: #e8eaf6;
}

#input-container {
  display: flex;
  gap: 10px;
}

#input-container input {
  flex: 1;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #bbdefb;
  border-radius: 8px;
  background: #e3f2fd;
  box-sizing: border-box;
}

#input-container button {
  padding: 10px 15px;
  font-size: 14px;
  background-color: #1e88e5;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

#input-container button:hover {
  background-color: #1565c0;
}

#input-container button:disabled {
  background-color: #90caf9;
  cursor: not-allowed;
}

/* Responsive Design */
@media (max-width: 768px) {
  #chat-container {
    padding: 10px;
    box-shadow: none;
  }

  #messages {
    height: 50vh; /* Reduced height for smaller screens */
    font-size: 12px; /* Slightly smaller text */
  }

  #input-container input,
  #input-container button {
    padding: 8px;
    font-size: 12px;
  }
}
</style>
