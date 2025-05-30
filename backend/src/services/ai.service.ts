import axios from 'axios';
import { config } from '../config/config';

interface LlamaApiResponse {
  code?: string; // Optional property if `code` might not always exist
}

export class AIService {
  // Calls the Llama 3.3 70B API for code generation based on natural language prompt.
  static async generateCode(prompt: string): Promise<string> {
    try {
      const response = await axios.post<LlamaApiResponse>(config.llamaApiEndpoint, { prompt });
      if (response.data && response.data.code) {
        return response.data.code;
      }
      throw new Error('Invalid response from Llama API');
    } catch (err: any) {
      throw new Error('Failed to generate code: ' + err.message);
    }
  }
}
