import React, { useState } from 'react';
import HomeHeader from '../components/home/HomeHeader';
import BottomNavigation from '../components/home/BottomNavigation';
import HomeView from '../components/home/HomeView';
import ClockInView from '../components/home/ClockInView';
import TaskView from '../components/home/TaskView';
import ExpenseView from '../components/home/ExpenseView';
import LeaveView from '../components/home/LeaveView';
import CreateTaskModal from '../components/home/CreateTaskModal';
import ClaimExpenseModal from '../components/home/ClaimExpenseModal';
import SubmitLeaveModal from '../components/home/SubmitLeaveModal';
import NotificationsModal from '../components/home/NotificationsModal';
import '../styles/home.css';

export default function Home({ isEmptyState = false, activeTab: propTab, onTabChange: propOnTabChange }) {
  const [internalTab, setInternalTab] = useState('home');
  const activeTab = propTab !== undefined ? propTab : internalTab;
  const setActiveTab = propOnTabChange || setInternalTab;

  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [isExpenseModalOpen, setIsExpenseModalOpen] = useState(false);
  const [isLeaveModalOpen, setIsLeaveModalOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  return (
    <div className="home-container">
      {/* Top Header */}
      <HomeHeader
        onOpenNotifications={() => setIsNotificationsOpen(true)}
        unreadCount={2}
      />

      {/* Tab Views */}
      <div style={{ flex: 1 }}>
        {activeTab === 'home' && (
          <HomeView
            isEmpty={isEmptyState}
            onTabJump={(tab) => setActiveTab(tab)}
          />
        )}

        {activeTab === 'clockin' && (
          <ClockInView isEmpty={isEmptyState} />
        )}

        {activeTab === 'tasks' && (
          <TaskView
            isEmpty={isEmptyState}
            onOpenCreateTask={() => setIsTaskModalOpen(true)}
          />
        )}

        {activeTab === 'expense' && (
          <ExpenseView
            isEmpty={isEmptyState}
            onOpenClaimExpense={() => setIsExpenseModalOpen(true)}
          />
        )}

        {activeTab === 'leave' && (
          <LeaveView
            isEmpty={isEmptyState}
            onOpenSubmitLeave={() => setIsLeaveModalOpen(true)}
          />
        )}
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation
        activeTab={activeTab}
        onTabChange={(tab) => setActiveTab(tab)}
      />

      {/* Interactive Modals */}
      <CreateTaskModal
        isOpen={isTaskModalOpen}
        onClose={() => setIsTaskModalOpen(false)}
        onTaskCreated={(newTask) => {
          alert(`Task "${newTask.title}" added to your queue!`);
        }}
      />

      <ClaimExpenseModal
        isOpen={isExpenseModalOpen}
        onClose={() => setIsExpenseModalOpen(false)}
        onExpenseClaimed={(newExp) => {
          alert(`Expense claim for ${newExp.totalExpense} (${newExp.title}) submitted for approval!`);
        }}
      />

      <SubmitLeaveModal
        isOpen={isLeaveModalOpen}
        onClose={() => setIsLeaveModalOpen(false)}
        onLeaveSubmitted={(newLeave) => {
          alert(`Leave request for ${newLeave.title} (${newLeave.totalDays}) submitted to HR!`);
        }}
      />

      <NotificationsModal
        isOpen={isNotificationsOpen}
        onClose={() => setIsNotificationsOpen(false)}
      />
    </div>
  );
}
