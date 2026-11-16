import React, { useState } from 'react';
import {
  CheckSquare,
  ArrowLeft,
  Plus,
  Send,
  Zap,
  Check,
  ChevronDown,
  X,
  Upload,
  Calendar,
  Layers,
  Target,
  User,
  MessageSquare
} from 'lucide-react';
import { currentUser } from '../../data/mockData';
import '../../styles/task.css';

// Exact Figma Clipboard Notepad Icon for Purple Banner
function TaskClipboardIcon({ size = 52 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" style={{ flexShrink: 0 }}>
      {/* Sparkles */}
      <circle cx="10" cy="18" r="1.5" fill="#FFFFFF" opacity="0.8" />
      <polygon points="56,8 58,12 62,14 58,16 56,20 54,16 50,14 54,12" fill="#FFFFFF" opacity="0.9" />
      <polygon points="12,48 13.5,51 16.5,52 13.5,53 12,56 10.5,53 7.5,52 10.5,51" fill="#FFFFFF" opacity="0.7" />

      {/* Notepad Board Shadow / Tilt */}
      <rect x="16" y="10" width="36" height="46" rx="6" fill="#EDE9FE" opacity="0.5" transform="rotate(-6 16 10)" />

      {/* Main Notepad Body */}
      <rect x="18" y="12" width="34" height="44" rx="6" fill="#FFFFFF" />

      {/* Golden / Yellow Clip at top */}
      <rect x="29" y="8" width="12" height="7" rx="2" fill="#F59E0B" />
      <rect x="32" y="6" width="6" height="4" rx="1.5" fill="#D97706" />

      {/* Checklist Lines & Checkboxes */}
      <rect x="23" y="22" width="4" height="4" rx="1" fill="#7146FD" />
      <line x1="30" y1="24" x2="45" y2="24" stroke="#7146FD" strokeWidth="2" strokeLinecap="round" />

      <rect x="23" y="30" width="4" height="4" rx="1" fill="#7146FD" />
      <line x1="30" y1="32" x2="42" y2="32" stroke="#7146FD" strokeWidth="2" strokeLinecap="round" />

      <rect x="23" y="38" width="4" height="4" rx="1" fill="#10B981" />
      <line x1="30" y1="40" x2="38" y2="40" stroke="#10B981" strokeWidth="2" strokeLinecap="round" />

      <line x1="23" y1="46" x2="40" y2="46" stroke="#E2E8F0" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

// Mockup photos matching Figma phone attachments
const MOCKUP_IMAGES = [
  'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=700&q=80',
  'https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&w=700&q=80',
  'https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?auto=format&fit=crop&w=700&q=80'
];

export default function TaskView({
  isEmpty = false,
  subScreen: propSubScreen,
  onSubScreenChange: propOnSubScreenChange
}) {
  // Navigation within the Task module:
  // 'main' | 'create-task' | 'details' | 'zoom'
  const [internalSubScreen, setInternalSubScreen] = useState('main');
  const subScreen = propSubScreen !== undefined ? propSubScreen : internalSubScreen;
  const setSubScreen = propOnSubScreenChange || setInternalSubScreen;

  // Active filter tab: 'all' | 'todo' | 'inprogress' | 'finish'
  const [activeTabFilter, setActiveTabFilter] = useState('all');

  // Modals inside create task: null | 'assign-to' | 'priority' | 'difficulty' | 'confirm-create' | 'create-success'
  const [activeModal, setActiveModal] = useState(null);

  // Create Task Form State (Pre-filled matching Figma CreateTask screens)
  const [taskTitle, setTaskTitle] = useState('Create Onboarding Screen');
  const [taskDesc, setTaskDesc] = useState('Create on boarding page based on pic');
  const [selectedAssignee, setSelectedAssignee] = useState('Alice - Sr Front End Developer');
  const [selectedPriority, setSelectedPriority] = useState('High');
  const [selectedDifficulty, setSelectedDifficulty] = useState('Very Easy (Less Than a Day)');

  // Temporary selection states inside bottom sheet selection modals
  const [tempAssignee, setTempAssignee] = useState('Alice - Sr Front End Developer');
  const [tempPriority, setTempPriority] = useState('High');
  const [tempDifficulty, setTempDifficulty] = useState('Very Easy (Less Than a Day)');

  // Uploaded attachments list (has initial 3 phone mockup attachments matching Figma)
  const [attachments, setAttachments] = useState(MOCKUP_IMAGES);
  const [isUploading, setIsUploading] = useState(false);

  // Selected mockup preview in Task Details
  const [activeMockupIndex, setActiveMockupIndex] = useState(0);

  // Task Details status toggle: 'In Progress' | 'Done'
  const [taskStatus, setTaskStatus] = useState('In Progress');

  // Interactive Comments list
  const [comments, setComments] = useState([
    {
      id: 1,
      author: 'Jason',
      role: 'Product Manager',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80',
      time: '29 Sept 2024 9:53 AM',
      text: 'Dude, how long it will take? Any blocker? Need the update asap'
    },
    {
      id: 2,
      author: 'Alice',
      role: 'Sr Front End Developer',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80',
      time: '29 Sept 2024 9:53 AM',
      text: '@Jason still testing, will be push at 04:00 PM'
    }
  ]);
  const [newCommentText, setNewCommentText] = useState('');

  // Task items
  const [taskList, setTaskList] = useState([
    {
      id: 'task-1',
      title: 'Create On Boarding Screen',
      status: 'In Progress',
      priority: 'High',
      date: '27 Sept',
      commentsCount: 2,
      progress: 65,
      avatars: [
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80'
      ]
    },
    {
      id: 'task-2',
      title: 'Slicing Dashboard Analytics',
      status: 'Done',
      priority: 'High',
      date: '27 Sept',
      commentsCount: 2,
      progress: 100,
      avatars: [
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80',
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80'
      ]
    },
    {
      id: 'task-3',
      title: 'Wiring User Profile & Badges',
      status: 'To Do',
      priority: 'Medium',
      date: '28 Sept',
      commentsCount: 1,
      progress: 0,
      avatars: [
        'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=80&q=80'
      ]
    }
  ]);

  // Handle uploading simulation
  const handleTriggerUpload = () => {
    setIsUploading(true);
    setTimeout(() => {
      setAttachments(MOCKUP_IMAGES);
      setIsUploading(false);
    }, 1200);
  };

  const handleDeleteAttachment = (idx) => {
    setAttachments((prev) => prev.filter((_, i) => i !== idx));
  };

  // Submit Task Creation
  const handleConfirmCreateTask = () => {
    setActiveModal('create-success');
  };

  const handleFinishCreateTask = () => {
    setActiveModal(null);
    setTaskList((prev) => [
      {
        id: `task-${Date.now()}`,
        title: taskTitle || 'New Design Deliverable',
        status: 'In Progress',
        priority: selectedPriority || 'High',
        date: 'Today',
        commentsCount: 0,
        progress: 15,
        avatars: [
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80'
        ]
      },
      ...prev
    ]);
    setSubScreen('main');
  };

  // Add Comment
  const handleSendComment = (e) => {
    e.preventDefault();
    if (!newCommentText.trim()) return;
    setComments((prev) => [
      ...prev,
      {
        id: Date.now(),
        author: currentUser.name,
        role: currentUser.role,
        avatar: currentUser.avatar,
        time: 'Just now',
        text: newCommentText.trim()
      }
    ]);
    setNewCommentText('');
  };

  // Filter tasks
  const filteredTasks = taskList.filter((t) => {
    if (activeTabFilter === 'todo') return t.status === 'To Do';
    if (activeTabFilter === 'inprogress') return t.status === 'In Progress';
    if (activeTabFilter === 'finish') return t.status === 'Done';
    return true;
  });

  // =========================================================================
  // SUB-SCREEN 4: FULL SCREEN IMAGE ZOOM LIGHTBOX (Figma DetailTask/Image)
  // =========================================================================
  if (subScreen === 'zoom') {
    return (
      <div
        className="lightbox-screen"
        onClick={() => setSubScreen('details')}
      >
        <div className="lightbox-hint-pill">Tap Again To Close Zoom</div>
        <img
          src={attachments[activeMockupIndex] || MOCKUP_IMAGES[0]}
          alt="Full Screen Zoom Preview"
          className="lightbox-img"
        />
      </div>
    );
  }

  // =========================================================================
  // SUB-SCREEN 3: TASK DETAILS (Figma DetailTask)
  // =========================================================================
  if (subScreen === 'details') {
    return (
      <div className="task-details-screen">
        <div className="task-details-header">
          <button
            type="button"
            className="signin-icon-btn"
            onClick={() => setSubScreen('main')}
          >
            <ArrowLeft size={18} />
          </button>
          <h2 className="create-task-title">Task Details</h2>
          <div style={{ width: '20px' }} />
        </div>

        <div className="task-details-title-row">
          <h1 className="task-details-main-title">{taskTitle}</h1>
          <span
            className={`task-pill-status ${taskStatus === 'Done' ? 'done' : 'inprogress'}`}
            style={{ cursor: 'pointer', userSelect: 'none' }}
            onClick={() => setTaskStatus((s) => (s === 'Done' ? 'In Progress' : 'Done'))}
            title="Click to toggle status"
          >
            {taskStatus === 'Done' ? <Check size={11} strokeWidth={3} /> : null}
            {taskStatus}
          </span>
        </div>
        <div className="task-details-date">Created 27 Sept 2024</div>

        {/* Mockup Gallery */}
        <div className="task-mockup-gallery">
          <div
            className="task-mockup-main"
            onClick={() => setSubScreen('zoom')}
            title="Click to view full screen"
          >
            <img
              src={attachments[activeMockupIndex] || MOCKUP_IMAGES[0]}
              alt="Task Preview"
              className="task-mockup-main-img"
            />
          </div>

          <div className="task-thumbnails-row">
            {attachments.map((img, i) => (
              <div
                key={i}
                className={`task-thumbnail-box ${activeMockupIndex === i ? 'active' : ''}`}
                onClick={() => setActiveMockupIndex(i)}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${i + 1}`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="task-details-desc-title">Description</div>
        <p className="task-details-desc-body">
          {taskDesc ||
            'Create on boarding page based on pic, pixel perfect, with the user story of I want to know what kind of apps is this so I need to view onboarding screen to leverage my knowledge so that I know what kind of apps is this'}
        </p>

        {/* Priority & Difficulty */}
        <div className="task-details-badge-grid">
          <div style={{ background: '#F9F9FC', padding: '10px 12px', borderRadius: '12px', border: '1px solid #EDEDF8' }}>
            <span style={{ fontSize: '10px', color: '#8F95B2', fontWeight: '700', display: 'block', marginBottom: '4px' }}>
              Priority
            </span>
            <span className="task-pill-priority high">
              <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#FF5252' }} />
              {selectedPriority}
            </span>
          </div>

          <div style={{ background: '#F9F9FC', padding: '10px 12px', borderRadius: '12px', border: '1px solid #EDEDF8' }}>
            <span style={{ fontSize: '10px', color: '#8F95B2', fontWeight: '700', display: 'block', marginBottom: '4px' }}>
              Difficulty
            </span>
            <span style={{ fontSize: '11px', fontWeight: '700', color: '#10B981', display: 'inline-flex', alignItems: 'center', gap: '3px' }}>
              <Check size={12} strokeWidth={2.5} />
              {selectedDifficulty}
            </span>
          </div>
        </div>

        {/* Assignee */}
        <div style={{ fontSize: '11px', color: '#8F95B2', fontWeight: '700', marginBottom: '6px' }}>
          Assignee
        </div>
        <div className="task-details-assignee-card">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80"
            alt="Assignee"
            style={{ width: '36px', height: '36px', borderRadius: '50%', objectFit: 'cover' }}
          />
          <div>
            <div style={{ fontSize: '13px', fontWeight: '800', color: '#1A1D2E' }}>Alice</div>
            <div style={{ fontSize: '11px', color: '#7146FD', fontWeight: '600' }}>Sr Front End Developer</div>
          </div>
        </div>

        {/* Comments Section */}
        <div className="task-comments-section">
          <div className="task-comments-heading">Comment Section</div>

          {comments.map((c) => (
            <div key={c.id} className="task-comment-item">
              <img src={c.avatar} alt={c.author} className="task-comment-avatar" />
              <div className="task-comment-bubble">
                <div className="task-comment-name-row">
                  <div>
                    <span className="task-comment-author">{c.author}</span>
                    <span className="task-comment-role">{c.role}</span>
                  </div>
                  <span className="task-comment-time">{c.time}</span>
                </div>
                <p className="task-comment-text">{c.text}</p>
              </div>
            </div>
          ))}

          {/* Add comment input */}
          <form onSubmit={handleSendComment} className="task-comment-input-row">
            <img
              src={currentUser.avatar}
              alt={currentUser.name}
              style={{ width: '32px', height: '32px', borderRadius: '50%', objectFit: 'cover' }}
            />
            <input
              type="text"
              className="task-comment-field"
              placeholder="Write a comment..."
              value={newCommentText}
              onChange={(e) => setNewCommentText(e.target.value)}
            />
            <button type="submit" className="task-comment-send-btn" aria-label="Send Comment">
              <Send size={15} />
            </button>
          </form>
        </div>
      </div>
    );
  }

  // =========================================================================
  // SUB-SCREEN 2: CREATE NEW TASK (Figma CreateTask)
  // =========================================================================
  if (subScreen === 'create-task') {
    return (
      <div className="create-task-screen">
        <div className="create-task-header">
          <button
            type="button"
            className="signin-icon-btn"
            onClick={() => setSubScreen('main')}
          >
            <ArrowLeft size={18} />
          </button>
          <h2 className="create-task-title">Create New Task</h2>
          <div style={{ width: '20px' }} />
        </div>

        {/* Attachment Upload Boxes */}
        <div className="attachment-label">Attachment</div>
        <div className="attachment-hint">Format should be in .pdf, .jpeg, .png less than 5MB</div>

        <div className="attachment-boxes-grid">
          {attachments.length === 0 ? (
            [0, 1, 2].map((idx) => (
              <div
                key={idx}
                className="attachment-upload-box"
                onClick={handleTriggerUpload}
              >
                {isUploading ? (
                  <>
                    <span className="attachment-progress-num">{75 - idx * 25}%</span>
                    <span className="attachment-progress-text">uploading...</span>
                  </>
                ) : (
                  <Upload size={20} />
                )}
              </div>
            ))
          ) : (
            attachments.map((img, i) => (
              <div key={i} className="attachment-upload-box" style={{ padding: 0 }}>
                <img src={img} alt={`Mockup ${i + 1}`} className="attachment-img-preview" />
                <button
                  type="button"
                  className="attachment-delete-badge"
                  onClick={() => handleDeleteAttachment(i)}
                  aria-label="Remove attachment"
                >
                  <X size={11} strokeWidth={3} />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Task Title */}
        <div className="signup-input-row">
          <label className="signup-label">Task Title</label>
          <div className="signup-input-field">
            <div className="signup-field-icon">
              <CheckSquare size={17} color="#7146FD" />
            </div>
            <input
              type="text"
              className="signup-input-element"
              placeholder="Enter Task Title"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
            />
          </div>
        </div>

        {/* Task Description */}
        <div className="signup-input-row" style={{ marginBottom: '14px' }}>
          <label className="signup-label">Task Description</label>
          <textarea
            className="selfie-notes-input"
            style={{ height: '74px', marginBottom: 0 }}
            placeholder="Enter Task Description"
            value={taskDesc}
            onChange={(e) => setTaskDesc(e.target.value)}
          />
        </div>

        {/* Assign To Dropdown Trigger */}
        <div className="signup-input-row">
          <label className="signup-label">Assign To</label>
          <div
            className="create-task-dropdown-field"
            onClick={() => {
              setTempAssignee(selectedAssignee);
              setActiveModal('assign-to');
            }}
          >
            <div className={`create-task-dropdown-left ${selectedAssignee ? '' : 'placeholder'}`}>
              <User size={16} color="#7146FD" />
              <span>{selectedAssignee || 'Select Member'}</span>
            </div>
            <ChevronDown size={16} color="#8F95B2" />
          </div>
        </div>

        {/* Priority Dropdown Trigger */}
        <div className="signup-input-row">
          <label className="signup-label">Priority</label>
          <div
            className="create-task-dropdown-field"
            onClick={() => {
              setTempPriority(selectedPriority);
              setActiveModal('priority');
            }}
          >
            <div className={`create-task-dropdown-left ${selectedPriority ? '' : 'placeholder'}`}>
              <Layers size={16} color="#7146FD" />
              <span>{selectedPriority || 'Select Priority'}</span>
            </div>
            <ChevronDown size={16} color="#8F95B2" />
          </div>
        </div>

        {/* Difficulty Dropdown Trigger */}
        <div className="signup-input-row" style={{ marginBottom: '24px' }}>
          <label className="signup-label">Difficulty</label>
          <div
            className="create-task-dropdown-field"
            onClick={() => {
              setTempDifficulty(selectedDifficulty);
              setActiveModal('difficulty');
            }}
          >
            <div className={`create-task-dropdown-left ${selectedDifficulty ? '' : 'placeholder'}`}>
              <Target size={16} color="#7146FD" />
              <span>{selectedDifficulty || 'Select Difficulty'}</span>
            </div>
            <ChevronDown size={16} color="#8F95B2" />
          </div>
        </div>

        {/* Create Task Button */}
        <button
          type="button"
          className="signup-btn-primary"
          onClick={() => setActiveModal('confirm-create')}
        >
          Create Task
        </button>

        {/* MODAL 1: ASSIGN TO SELECTION */}
        {activeModal === 'assign-to' && (
          <div className="signup-modal-backdrop" onClick={() => setActiveModal(null)}>
            <div className="selection-bottom-modal" onClick={(e) => e.stopPropagation()}>
              <h3 className="selection-modal-title">Assign To</h3>
              <p className="selection-modal-sub">Who will finish this task</p>

              <div className="selection-options-list">
                {[
                  'Ivankov - Sr Front End Developer',
                  'Brahm - Mid Front End Developer',
                  'Alice - Sr Front End Developer',
                  'Jeane - Jr Front End Developer',
                  'Claudia - Jr Front End Developer'
                ].map((opt) => (
                  <div
                    key={opt}
                    className={`selection-option-item ${tempAssignee === opt ? 'selected' : ''}`}
                    onClick={() => setTempAssignee(opt)}
                  >
                    <span className="selection-option-label">{opt}</span>
                    <div className={`selection-radio-circle ${tempAssignee === opt ? 'checked' : ''}`}>
                      {tempAssignee === opt && <Check size={11} color="#FFFFFF" strokeWidth={3} />}
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <button
                  type="button"
                  className="attendant-btn-outline"
                  onClick={() => setActiveModal(null)}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="attendant-btn-purple"
                  onClick={() => {
                    setSelectedAssignee(tempAssignee);
                    setActiveModal(null);
                  }}
                >
                  Select
                </button>
              </div>
            </div>
          </div>
        )}

        {/* MODAL 2: PRIORITY SELECTION */}
        {activeModal === 'priority' && (
          <div className="signup-modal-backdrop" onClick={() => setActiveModal(null)}>
            <div className="selection-bottom-modal" onClick={(e) => e.stopPropagation()}>
              <h3 className="selection-modal-title">Priority</h3>
              <p className="selection-modal-sub">Select the priority</p>

              <div className="selection-options-list">
                {['Low', 'Medium', 'High'].map((opt) => (
                  <div
                    key={opt}
                    className={`selection-option-item ${tempPriority === opt ? 'selected' : ''}`}
                    onClick={() => setTempPriority(opt)}
                  >
                    <span className="selection-option-label">{opt}</span>
                    <div className={`selection-radio-circle ${tempPriority === opt ? 'checked' : ''}`}>
                      {tempPriority === opt && <Check size={11} color="#FFFFFF" strokeWidth={3} />}
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <button
                  type="button"
                  className="attendant-btn-outline"
                  onClick={() => setActiveModal(null)}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="attendant-btn-purple"
                  onClick={() => {
                    setSelectedPriority(tempPriority);
                    setActiveModal(null);
                  }}
                >
                  Select
                </button>
              </div>
            </div>
          </div>
        )}

        {/* MODAL 3: DIFFICULTY SELECTION */}
        {activeModal === 'difficulty' && (
          <div className="signup-modal-backdrop" onClick={() => setActiveModal(null)}>
            <div className="selection-bottom-modal" onClick={(e) => e.stopPropagation()}>
              <h3 className="selection-modal-title">Difficulty</h3>
              <p className="selection-modal-sub">Select the difficulty</p>

              <div className="selection-options-list">
                {[
                  'Very Easy (Less Than a Day)',
                  'Easy (A Day)',
                  'Moderate (3 Days)',
                  'Intermediate (5 Days)',
                  'Advanced (1 Week)'
                ].map((opt) => (
                  <div
                    key={opt}
                    className={`selection-option-item ${tempDifficulty === opt ? 'selected' : ''}`}
                    onClick={() => setTempDifficulty(opt)}
                  >
                    <span className="selection-option-label">{opt}</span>
                    <div className={`selection-radio-circle ${tempDifficulty === opt ? 'checked' : ''}`}>
                      {tempDifficulty === opt && <Check size={11} color="#FFFFFF" strokeWidth={3} />}
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <button
                  type="button"
                  className="attendant-btn-outline"
                  onClick={() => setActiveModal(null)}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="attendant-btn-purple"
                  onClick={() => {
                    setSelectedDifficulty(tempDifficulty);
                    setActiveModal(null);
                  }}
                >
                  Select
                </button>
              </div>
            </div>
          </div>
        )}

        {/* MODAL 4: CONFIRM CREATE TASK */}
        {activeModal === 'confirm-create' && (
          <div className="signup-modal-backdrop">
            <div className="signup-bottom-modal">
              <div className="signup-floating-badge">
                <CheckSquare size={26} strokeWidth={2.4} color="#FFFFFF" />
              </div>

              <h2 className="signup-modal-title">Create New Task</h2>
              <p className="signup-modal-desc">
                Double-check your task details to ensure everything is correct. Do you want to proceed?
              </p>

              <button
                type="button"
                className="signup-btn-primary"
                onClick={handleConfirmCreateTask}
              >
                Yes, Proceed Now
              </button>

              <button
                type="button"
                className="signup-btn-secondary"
                onClick={() => setActiveModal(null)}
              >
                No, Let me check
              </button>
            </div>
          </div>
        )}

        {/* MODAL 5: TASK HAS BEEN CREATED SUCCESS */}
        {activeModal === 'create-success' && (
          <div className="signup-modal-backdrop">
            <div className="signup-bottom-modal">
              <div className="signup-floating-badge">
                <CheckSquare size={26} strokeWidth={2.4} color="#FFFFFF" />
              </div>

              <h2 className="signup-modal-title">Task Has Been Created!</h2>
              <p className="signup-modal-desc">
                Congratulations! Task has been created! View your task in the task management.
              </p>

              <button
                type="button"
                className="signup-btn-primary"
                onClick={handleFinishCreateTask}
              >
                View Task Management
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  // =========================================================================
  // SUB-SCREEN 1: MAIN TASK DASHBOARD (Figma Frame TaskMenu)
  // =========================================================================
  return (
    <div className="task-screen-wrap">
      {/* Top Purple Banner */}
      <div className="task-purple-banner">
        <div>
          <h1 className="task-banner-title">Challanges Awaiting</h1>
          <p className="task-banner-sub">Let's tackle your to do list</p>
        </div>
        <TaskClipboardIcon size={52} />
      </div>

      {/* Floating Summary Card */}
      <div className="task-summary-card">
        <div className="task-summary-title">Summary of Your Work</div>
        <div className="task-summary-sub">Your current task progress</div>

        <div className="task-summary-stats-grid">
          <div className="task-summary-stat-box">
            <div className="task-summary-stat-label">
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#7146FD' }} />
              To Do
            </div>
            <div className="task-summary-stat-val">5</div>
          </div>

          <div className="task-summary-stat-box">
            <div className="task-summary-stat-label">
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#F59E0B' }} />
              In Progress
            </div>
            <div className="task-summary-stat-val">2</div>
          </div>

          <div className="task-summary-stat-box">
            <div className="task-summary-stat-label">
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10B981' }} />
              Done
            </div>
            <div className="task-summary-stat-val">1</div>
          </div>
        </div>
      </div>

      {/* Burnout Stats Card */}
      <div className="burnout-stats-card">
        <div className="burnout-card-header">
          <span className="burnout-card-title">Sprint 20 - Burnout Stats</span>
          <span className="burnout-tag-poor">Poor</span>
        </div>
        <p className="burnout-card-desc">
          You've completed 8 more tasks than usual, maintain your task with your supervisor
        </p>
        <div className="burnout-progress-row">
          <span className="burnout-emoji" role="img" aria-label="Stressed">😞</span>
          <div className="burnout-progress-track">
            <div className="burnout-progress-fill" />
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="task-tabs-row">
        {[
          { id: 'all', label: 'All 8' },
          { id: 'inprogress', label: 'In Progress 2' },
          { id: 'finish', label: 'Finish 1' }
        ].map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={`task-tab-btn ${activeTabFilter === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTabFilter(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Task Items List */}
      <div className="task-list-wrap">
        {filteredTasks.map((t) => (
          <div
            key={t.id}
            className="task-item-card"
            onClick={() => {
              setTaskTitle(t.title);
              setTaskStatus(t.status);
              setSubScreen('details');
            }}
          >
            <div className="task-item-header">
              <div className="task-lightning-badge">
                <Zap size={14} fill="#FFFFFF" color="#FFFFFF" />
              </div>
              <h3 className="task-item-title">{t.title}</h3>
            </div>

            <div className="task-pills-row">
              <span className={`task-pill-status ${t.status === 'Done' ? 'done' : 'inprogress'}`}>
                {t.status === 'Done' ? <Check size={10} strokeWidth={3} /> : null}
                {t.status}
              </span>

              <span className="task-pill-priority high">
                <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#FF5252' }} />
                {t.priority}
              </span>
            </div>

            <div className="task-item-progress-track">
              <div
                className="task-item-progress-fill"
                style={{ width: `${t.progress}%` }}
              />
            </div>

            <div className="task-item-footer">
              <div className="task-item-avatars">
                {t.avatars.map((av, i) => (
                  <img
                    key={i}
                    src={av}
                    alt="Team member"
                    className="task-avatar-tiny"
                  />
                ))}
              </div>

              <div className="task-item-meta">
                <span>{t.date}</span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '3px' }}>
                  <MessageSquare size={12} color="#8F95B2" />
                  {t.commentsCount}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Create Task Button */}
      <div style={{ padding: '0 16px' }}>
        <button
          type="button"
          className="signup-btn-primary"
          onClick={() => setSubScreen('create-task')}
        >
          Create Task
        </button>
      </div>
    </div>
  );
}
