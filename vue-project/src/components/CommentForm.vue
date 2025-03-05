<template>
  <div class="comment-form">
    <h3>Leave a Comment</h3>
    <form @submit.prevent="submitComment">
      <div class="form-group">
        <label for="name">Name:</label>
        <input
          type="text"
          id="name"
          v-model="name"
          placeholder="Your name"
          required
        />
      </div>
      <div class="form-group">
        <label for="message">Message:</label>
        <textarea
          id="message"
          v-model="message"
          placeholder="Your message"
          required
        ></textarea>
      </div>
      <button type="submit" :disabled="isSubmitting">
        {{ isSubmitting ? "Submitting..." : "Submit" }}
      </button>
    </form>
    <p v-if="error" class="error">{{ error }}</p>
    <p v-if="success" class="success">{{ success }}</p>
  </div>
</template>

<script>
import { supabase } from "../supabase";

export default {
  data() {
    return {
      name: "",
      message: "",
      isSubmitting: false,
      error: "",
      success: "",
    };
  },
  methods: {
    async submitComment() {
      this.isSubmitting = true;
      this.error = "";
      this.success = "";

      try {
        const { error } = await supabase
          .from("comments")
          .insert([{ name: this.name, message: this.message }]);

        if (error) {
          throw error;
        }

        this.name = "";
        this.message = "";
        this.success = "Comment submitted successfully!";
      } catch (error) {
        this.error = "Failed to submit comment. Please try again.";
        console.error("Error submitting comment:", error);
      } finally {
        this.isSubmitting = false;
      }
    },
  },
};
</script>

<style scoped>
.comment-form {
  max-width: 600px;
  margin: 30px auto;
  padding: 20px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.comment-form:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

h3 {
  text-align: center;
  margin-bottom: 15px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  font-weight: 600;
  display: block;
  margin-bottom: 5px;
}

input,
textarea {
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  transition: border-color 0.3s ease;
}

input:focus,
textarea:focus {
  border-color: #3498db;
  outline: none;
}

button {
  width: 100%;
  padding: 10px;
  font-size: 1.2rem;
  background: #3498db;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;
}

button:disabled {
  background: #95a5a6;
  cursor: not-allowed;
}

button:hover:not(:disabled) {
  background: #2980b9;
}

.error {
  color: red;
  text-align: center;
  margin-top: 10px;
}

.success {
  color: green;
  text-align: center;
  margin-top: 10px;
}
</style>
