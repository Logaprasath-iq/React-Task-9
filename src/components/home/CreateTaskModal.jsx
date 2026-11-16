import React, { useState } from 'react';
import Modal from '../common/Modal';
import AuthInput from '../common/AuthInput';
import PrimaryButton from '../common/PrimaryButton';
import { Plus, Tag } from 'lucide-react';

export default function CreateTaskModal({ isOpen, onClose, onTaskCreated }) {
  const [title, setTitle] = useState('');
  const [tag, setTag] = useState('Design');
  const [priority, setPriority] = useState('Medium');
  const [dueDate, setDueDate] = useState('Friday, 05:00 PM');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      setError('Task title is required');
      return;
    }

    const newTask = {
      id: Date.now(),
      title,
      tag,
      category: tag,
      status: 'In Progress',
      progress: 20,
      priority,
      dueDate,
      team: ['https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80'],
      moreTeamCount: 1
    };

    onTaskCreated(newTask);
    setTitle('');
    setError('');
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Create New Task" subtitle="Add a work task or team deliverable">
      <form onSubmit={handleSubmit}>
        <AuthInput
          label="Task Title"
          placeholder="e.g. Design Mobile App Landing Page"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            if (error) setError('');
          }}
          error={error}
          required
        />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '16px' }}>
          <div>
            <label style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text-dark)', marginBottom: '6px', display: 'block' }}>
              Category
            </label>
            <select
              value={tag}
              onChange={(e) => setTag(e.target.value)}
              style={{
                width: '100%',
                height: '50px',
                background: 'var(--bg-input)',
                border: '1.5px solid var(--border-light)',
                borderRadius: 'var(--radius-md)',
                padding: '0 12px',
                fontSize: '14px',
                color: 'var(--text-dark)',
                outline: 'none'
              }}
            >
              <option value="Design">Design</option>
              <option value="Dev">Dev / Engineering</option>
              <option value="Research">Research</option>
              <option value="Marketing">Marketing</option>
              <option value="Management">Management</option>
            </select>
          </div>

          <div>
            <label style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text-dark)', marginBottom: '6px', display: 'block' }}>
              Priority
            </label>
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              style={{
                width: '100%',
                height: '50px',
                background: 'var(--bg-input)',
                border: '1.5px solid var(--border-light)',
                borderRadius: 'var(--radius-md)',
                padding: '0 12px',
                fontSize: '14px',
                color: 'var(--text-dark)',
                outline: 'none'
              }}
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
        </div>

        <AuthInput
          label="Due Timeline"
          placeholder="e.g. Friday, 05:00 PM"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />

        <PrimaryButton type="submit" size="lg" icon={<Plus size={18} />}>
          Add Task to Queue
        </PrimaryButton>
      </form>
    </Modal>
  );
}
