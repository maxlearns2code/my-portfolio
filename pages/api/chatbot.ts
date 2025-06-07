import type { NextApiRequest, NextApiResponse } from 'next';
import data from '@/app/lib/data/data.json';

type QA = {
  question: string;
  answer: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { message } = req.body;
  
  if (!message || typeof message !== 'string') {
    return res.status(400).json({ message: 'Invalid request' });
  }

  // Log to check if data is being accessed correctly
  console.log('QA data length:', data.qa.length);
  
  // Simple keyword matching approach
  const userMessage = message.toLowerCase();
  
  // Try to find a direct match first
  let bestMatch = data.qa.find(item => 
    item.question.toLowerCase() === userMessage
  );
  
  // If no direct match, look for keywords
  if (!bestMatch) {
    const matches = data.qa.map(item => {
      const questionKeywords = item.question.toLowerCase().split(/\s+/);
      const messageKeywords = userMessage.split(/\s+/);
      
      // Count how many keywords match
      const matchCount = questionKeywords.filter(keyword => 
        messageKeywords.includes(keyword) || 
        messageKeywords.some(msgWord => msgWord.includes(keyword) || keyword.includes(msgWord))
      ).length;
      
      return {
        qa: item,
        score: matchCount / Math.max(questionKeywords.length, 1)
      };
    });
    
    // Sort by score
    const topMatch = matches.sort((a, b) => b.score - a.score)[0];
    
    // Use a lower threshold to be more lenient
    if (topMatch && topMatch.score > 0.1) {
      bestMatch = topMatch.qa;
    }
  }
  
  // Fallback responses based on common keywords
  let answer = "Sorry, I couldn't find an answer for that. Try rephrasing your question.";
  
  if (bestMatch) {
    answer = bestMatch.answer;
  } else if (userMessage.includes('hello') || userMessage.includes('hi') || userMessage.includes('hey')) {
    answer = "Hello! I'm Max's assistant. How can I help you today?";
  } else if (userMessage.includes('who') && (userMessage.includes('max') || userMessage.includes('you'))) {
    answer = "Max is a Front-End Developer specializing in React, Next.js, and TypeScript. He has over 15 years of experience in finance and HR before transitioning to tech.";
  } else if (userMessage.includes('job') || userMessage.includes('work') || userMessage.includes('role')) {
    answer = "Max is a Front-End Developer who builds modern, responsive websites and web applications using React, Next.js, and TypeScript.";
  }
  
  res.status(200).json({ answer });
}
