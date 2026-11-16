import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Paperclip,
  Camera,
  Send,
  Image as ImageIcon
} from 'lucide-react';
import '../styles/chat.css';

// Pre-defined conversation threads from Figma
const THREADS = [
  {
    id: 'alicia',
    name: 'Alicia Rochefort',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80',
    preview: 'Hey Tonald, we have to attend our daily stand up...',
    time: '09.10',
    unread: 1,
    messages: [
      { id: 1, sender: 'them', text: 'Hey Tonald, we have to attend our daily stand up', time: '09.10' },
      { id: 2, sender: 'me', text: 'Sure, when will daily stand up starts?', time: '09.12' },
      { id: 3, sender: 'them', text: "It's around 11.00, is the meeting room", time: '09.13' },
      { id: 4, sender: 'them', text: "btw, don't forget bring the sunday report ya", time: '09.13' },
      { id: 5, sender: 'them', text: 'See you there!', time: '09.13' },
      {
        id: 6,
        sender: 'me',
        text: "Okay Alicia, I'll make sure to attend the daily stand up and make sure everything goes well, and bring the sunday report to you, see you there at 11.00 Alicia!",
        time: '09.14'
      }
    ]
  },
  {
    id: 'jessica',
    name: 'Jessica Tan',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80',
    preview: 'Hey Tonald, send me picture of our teamwork for IG post',
    time: '09.10',
    unread: 0,
    messages: [
      { id: 1, sender: 'them', text: 'Hey Tonald, send me picture of our teamwork for IG post', time: '09.10' },
      { id: 2, sender: 'me', text: "Sure, wait, I'll send you", time: '09.12' },
      {
        id: 3,
        sender: 'me',
        type: 'image',
        imgUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
        time: '09.12'
      },
      { id: 4, sender: 'them', text: 'Thanks Tonald!', time: '09.13' },
      { id: 5, sender: 'me', text: "you're welcome jess!", time: '09.14' }
    ]
  },
  {
    id: 'lolita',
    name: 'Lolita Xue',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=80',
    preview: "Ey Tonald, let's do the design sprint at friday 16.30...",
    time: '09.10',
    unread: 0,
    messages: [
      { id: 1, sender: 'them', text: "Ey Tonald, let's do the design sprint at friday 16.30", time: '09.10' },
      { id: 2, sender: 'me', text: 'Sounds great! I will book the meeting room.', time: '09.12' }
    ]
  },
  {
    id: 'eaj',
    name: 'Eaj Prokk',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=100&q=80',
    preview: "Ey Tonald, let's do the design sprint at friday 16.30...",
    time: '09.10',
    unread: 0,
    messages: [
      { id: 1, sender: 'them', text: "Ey Tonald, let's do the design sprint at friday 16.30", time: '09.10' }
    ]
  },
  {
    id: 'jason',
    name: 'Jason',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80',
    preview: "Ey Tonald, let's do the design sprint at friday 16.30...",
    time: '09.10',
    unread: 0,
    messages: [
      { id: 1, sender: 'them', text: "Dude, how long it will take? Any blocker?", time: '09.10' }
    ]
  },
  {
    id: 'kimberly',
    name: 'Kimberly',
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=100&q=80',
    preview: "Ey Tonald, let's do the design sprint at friday 16.30...",
    time: '09.10',
    unread: 0,
    messages: [
      { id: 1, sender: 'them', text: "Ey Tonald, let's do the design sprint at friday 16.30", time: '09.10' }
    ]
  },
  {
    id: 'wang',
    name: 'Wang',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80',
    preview: "Ey Tonald, let's do the design sprint at friday 16.30...",
    time: '09.10',
    unread: 0,
    messages: [
      { id: 1, sender: 'them', text: "Ey Tonald, let's do the design sprint at friday 16.30", time: '09.10' }
    ]
  },
  {
    id: 'james',
    name: 'James',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=100&q=80',
    preview: "Ey Tonald, let's do the design sprint at friday 16.30...",
    time: '09.10',
    unread: 0,
    messages: [
      { id: 1, sender: 'them', text: "Ey Tonald, let's do the design sprint at friday 16.30", time: '09.10' }
    ]
  },
  {
    id: 'bella',
    name: 'Bella',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80',
    preview: "Ey Tonald, let's do the design sprint at friday 16.30...",
    time: '09.10',
    unread: 0,
    messages: [
      { id: 1, sender: 'them', text: "Ey Tonald, let's do the design sprint at friday 16.30", time: '09.10' }
    ]
  }
];

export default function Messages() {
  const navigate = useNavigate();

  // Navigation: null (Messages List) | contact object (Active Chat View)
  const [activeChat, setActiveChat] = useState(null);
  const [threads, setThreads] = useState(THREADS);
  const [inputText, setInputText] = useState('');

  // Handle open conversation
  const handleOpenThread = (thread) => {
    // Mark as read
    setThreads((prev) =>
      prev.map((t) => (t.id === thread.id ? { ...t, unread: 0 } : t))
    );
    setActiveChat(thread);
    setInputText(thread.id === 'jessica' ? 'Do you ' : '');
  };

  // Handle send message
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputText.trim() || !activeChat) return;

    const newMsg = {
      id: Date.now(),
      sender: 'me',
      text: inputText.trim(),
      time: '09.15'
    };

    const updatedMessages = [...activeChat.messages, newMsg];
    setActiveChat((prev) => ({
      ...prev,
      messages: updatedMessages
    }));

    setThreads((prev) =>
      prev.map((t) =>
        t.id === activeChat.id
          ? { ...t, messages: updatedMessages, preview: inputText.trim(), time: '09.15' }
          : t
      )
    );

    setInputText('');
  };

  // =========================================================================
  // INDIVIDUAL CHAT VIEW (Screen 3 & 4 matching Figma)
  // =========================================================================
  if (activeChat) {
    return (
      <div className="chat-screen-wrap">
        {/* Chat Header */}
        <div className="chat-header">
          <button
            type="button"
            className="task-round-back-btn"
            onClick={() => setActiveChat(null)}
            aria-label="Back to Messages"
          >
            <ArrowLeft size={18} />
          </button>
          <h2 className="chat-header-name">{activeChat.name}</h2>
          <div style={{ width: '32px' }} />
        </div>

        {/* Message Bubbles Container */}
        <div className="chat-messages-container">
          {activeChat.messages.map((msg) => {
            const isMe = msg.sender === 'me';

            if (msg.type === 'image') {
              return (
                <div key={msg.id} className="chat-img-attachment-card">
                  <img
                    src={msg.imgUrl}
                    alt="Teamwork meeting attachment"
                    className="chat-img-attachment"
                  />
                  <div className="chat-bubble-time" style={{ color: '#FFFFFF', padding: '0 4px 2px' }}>
                    {msg.time}
                  </div>
                </div>
              );
            }

            return (
              <div
                key={msg.id}
                className={isMe ? 'chat-bubble-outgoing' : 'chat-bubble-incoming'}
              >
                <div>{msg.text}</div>
                <div className="chat-bubble-time">{msg.time}</div>
              </div>
            );
          })}
        </div>

        {/* Bottom Input Bar matching Figma */}
        <form className="chat-input-bar" onSubmit={handleSendMessage}>
          <input
            type="text"
            className="chat-input-field"
            placeholder="Type a message..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />

          <button
            type="button"
            className="chat-action-btn"
            onClick={() => alert('Attachment picker opened')}
            title="Attach file"
          >
            <Paperclip size={18} />
          </button>

          <button
            type="button"
            className="chat-action-btn"
            onClick={() => alert('Camera opened')}
            title="Open camera"
          >
            <Camera size={18} />
          </button>

          <button
            type="submit"
            className="chat-send-btn"
            title="Send message"
          >
            <Send size={16} />
          </button>
        </form>
      </div>
    );
  }

  // =========================================================================
  // MESSAGES LIST (Screen 2 matching Figma)
  // =========================================================================
  return (
    <div className="messages-page-wrap">
      {/* Top Header */}
      <div className="messages-header">
        <button
          type="button"
          className="task-round-back-btn"
          onClick={() => navigate('/home')}
          aria-label="Back to Dashboard"
        >
          <ArrowLeft size={18} />
        </button>
        <h2 className="messages-title">Messages</h2>
        <div style={{ width: '32px' }} />
      </div>

      {/* Conversations List */}
      <div className="messages-list">
        {threads.map((thread) => (
          <div
            key={thread.id}
            className="message-thread-item"
            onClick={() => handleOpenThread(thread)}
          >
            <div className="message-thread-avatar">
              <img src={thread.avatar} alt={thread.name} />
            </div>

            <div className="message-thread-center">
              <div className="message-thread-name">{thread.name}</div>
              <div className="message-thread-preview">{thread.preview}</div>
            </div>

            <div className="message-thread-right">
              <span className="message-thread-time">{thread.time}</span>
              {thread.unread > 0 && (
                <span className="message-unread-badge">{thread.unread}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
