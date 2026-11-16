import React, { useState } from 'react';
import { CheckSquare, Flame, Plus, Clock, Inbox, AlertTriangle } from 'lucide-react';
import PrimaryButton from '../common/PrimaryButton';
import { initialTasks } from '../../data/mockData';

export default function TaskView({ isEmpty = false, onOpenCreateTask }) {
  const [filter, setFilter] = useState('all'); // 'all' | 'in-progress' | 'done'
  const [tasks, setTasks] = useState(initialTasks);

  const totalCount = tasks.length;
  const inProgressCount = tasks.filter(t => t.status === 'In Progress').length;
  const doneCount = tasks.filter(t => t.status === 'Done').length;

  const filteredTasks = tasks.filter(t => {
    if (filter === 'in-progress') return t.status === 'In Progress';
    if (filter === 'done') return t.status === 'Done';
    return true;
  });

  if (isEmpty) {
    return (
      <div className="animate-slide-up" style={{ padding: '0 0 20px' }}>
        <div className="home-summary-banner">
          <div>
            <h2 className="home-summary-title">Challenges Awaiting</h2>
            <p className="home-summary-desc">Track and conquer your daily project tasks</p>
          </div>
          <CheckSquare size={36} color="#FFFFFF" opacity={0.8} />
        </div>

        <div className="home-section">
          <div className="empty-state-card">
            <div className="empty-state-icon-box">
              <Inbox size={32} />
            </div>
            <h4 className="empty-state-title">No Task Assigned</h4>
            <p className="empty-state-subtitle">
              You currently have no tasks assigned to your queue. You can create your own custom task below!
            </p>
            <div style={{ marginTop: '16px', width: '200px' }}>
              <PrimaryButton size="sm" onClick={onOpenCreateTask} icon={<Plus size={16} />}>
                Create Task
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-slide-up" style={{ padding: '0 0 20px' }}>
      {/* Header Banner */}
      <div className="home-summary-banner">
        <div>
          <h2 className="home-summary-title">Challenges Awaiting</h2>
          <p className="home-summary-desc">Track your task progress and deadlines here</p>
        </div>
        <div style={{ flexShrink: 0 }}>
          <CheckSquare size={38} color="#FFFFFF" opacity={0.9} />
        </div>
      </div>

      <div className="home-section">
        {/* Summary of Task Status Card */}
        <div
          style={{
            background: '#FFFFFF',
            borderRadius: 'var(--radius-lg)',
            padding: '18px',
            border: '1px solid var(--border-light)',
            boxShadow: 'var(--shadow-card)',
            marginBottom: '16px'
          }}
        >
          <h3 style={{ fontSize: '15px', fontWeight: '800', color: 'var(--text-dark)' }}>
            Summary of Task Status
          </h3>
          <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '14px' }}>
            This month's overall task metrics
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px' }}>
            <div
              style={{
                background: 'var(--purple-soft)',
                padding: '12px 10px',
                borderRadius: 'var(--radius-md)',
                textAlign: 'center'
              }}
            >
              <span style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: '600' }}>Total</span>
              <div style={{ fontSize: '18px', fontWeight: '800', color: 'var(--text-dark)', marginTop: '2px' }}>
                {totalCount}
              </div>
            </div>

            <div
              style={{
                background: 'var(--status-orange-bg)',
                padding: '12px 10px',
                borderRadius: 'var(--radius-md)',
                textAlign: 'center'
              }}
            >
              <span style={{ fontSize: '11px', color: 'var(--status-orange)', fontWeight: '600' }}>In Progress</span>
              <div style={{ fontSize: '18px', fontWeight: '800', color: 'var(--status-orange)', marginTop: '2px' }}>
                {inProgressCount}
              </div>
            </div>

            <div
              style={{
                background: 'var(--status-green-bg)',
                padding: '12px 10px',
                borderRadius: 'var(--radius-md)',
                textAlign: 'center'
              }}
            >
              <span style={{ fontSize: '11px', color: 'var(--status-green)', fontWeight: '600' }}>Done</span>
              <div style={{ fontSize: '18px', fontWeight: '800', color: 'var(--status-green)', marginTop: '2px' }}>
                {doneCount}
              </div>
            </div>
          </div>
        </div>

        {/* Burn In - Burnout Risk Card */}
        <div
          style={{
            background: 'linear-gradient(135deg, #FFF9F3 0%, #FFFFFF 100%)',
            borderRadius: 'var(--radius-lg)',
            padding: '16px 18px',
            border: '1.5px solid #FFE4C8',
            marginBottom: '18px',
            boxShadow: 'var(--shadow-sm)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div
                style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  background: 'var(--status-orange-bg)',
                  color: 'var(--status-orange)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Flame size={16} />
              </div>
              <span style={{ fontSize: '14px', fontWeight: '700', color: 'var(--text-dark)' }}>
                Burn In – Burnout Risk
              </span>
            </div>
            <span
              style={{
                padding: '3px 10px',
                borderRadius: 'var(--radius-full)',
                fontSize: '11px',
                fontWeight: '700',
                background: '#FFF0DE',
                color: '#FF8A00'
              }}
            >
              Moderate
            </span>
          </div>
          <p style={{ fontSize: '12px', color: 'var(--text-body)', lineHeight: '1.5' }}>
            You're handling 2 complex deliverables this week. Maintain scheduled breaks to sustain peak balance!
          </p>
        </div>

        {/* Filter Pills */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '14px' }}>
          <button
            type="button"
            className={`tab-filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All ({totalCount})
          </button>
          <button
            type="button"
            className={`tab-filter-btn ${filter === 'in-progress' ? 'active' : ''}`}
            onClick={() => setFilter('in-progress')}
          >
            In Progress ({inProgressCount})
          </button>
          <button
            type="button"
            className={`tab-filter-btn ${filter === 'done' ? 'active' : ''}`}
            onClick={() => setFilter('done')}
          >
            Done ({doneCount})
          </button>
        </div>

        {/* Tasks List */}
        {filteredTasks.map((task) => (
          <div key={task.id} className="task-card">
            <div className="task-card-header">
              <div>
                <span className="task-category-tag">{task.tag}</span>
                <h4 className="task-card-title">{task.title}</h4>
              </div>
              <span className={`status-pill ${task.status === 'Done' ? 'completed' : 'in-progress'}`}>
                {task.status}
              </span>
            </div>

            <div className="task-progress-bar-wrap">
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', fontWeight: '600', color: 'var(--text-muted)', marginBottom: '4px' }}>
                <span>Progress</span>
                <span style={{ color: 'var(--primary-purple)' }}>{task.progress}%</span>
              </div>
              <div className="task-progress-bar-track">
                <div
                  className="task-progress-bar-fill"
                  style={{
                    width: `${task.progress}%`,
                    background: task.status === 'Done' ? 'var(--status-green)' : 'var(--purple-gradient)'
                  }}
                />
              </div>
            </div>

            <div className="task-card-footer">
              <div className="team-avatars-row">
                {task.team.map((imgUrl, i) => (
                  <img key={i} src={imgUrl} alt="Assignee" className="team-avatar-tiny" />
                ))}
                {task.moreTeamCount > 0 && (
                  <span className="team-avatar-more">+{task.moreTeamCount}</span>
                )}
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '11.5px', color: 'var(--text-muted)' }}>
                <Clock size={13} />
                <span>{task.dueDate}</span>
              </div>
            </div>
          </div>
        ))}

        {/* Bottom Create Task Button */}
        <div style={{ marginTop: '16px' }}>
          <PrimaryButton
            size="lg"
            onClick={onOpenCreateTask}
            icon={<Plus size={18} />}
          >
            Create Task
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
}
