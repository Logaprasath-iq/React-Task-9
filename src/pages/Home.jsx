import React, { useState, useEffect } from 'react';
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

export default function Home({
  isEmptyState = false,
  onToggleEmptyState,
  activeTab: propTab,
  onTabChange: propOnTabChange,
  initialTaskSubScreen = 'main',
  initialExpenseSubScreen = 'main',
  initialLeaveSubScreen = 'main'
}) {
  const [internalTab, setInternalTab] = useState('home');
  const activeTab = propTab !== undefined ? propTab : internalTab;
  const setActiveTab = propOnTabChange || setInternalTab;

  // Sub-screen state inside the Attendant/Clock-In flow:
  // 'main' | 'clockin-map' | 'camera' | 'selfie-review' | 'details'
  const [clockInSubScreen, setClockInSubScreen] = useState('main');

  // Sub-screen state inside the Task Management flow:
  // 'main' | 'create-task' | 'details' | 'zoom' | 'burnout-stats'
  const [taskSubScreen, setTaskSubScreen] = useState(initialTaskSubScreen);

  // Sub-screen state inside the Expense flow:
  // 'main' | 'submit-expense'
  const [expenseSubScreen, setExpenseSubScreen] = useState(initialExpenseSubScreen);

  // Sub-screen state inside the Leave flow:
  // 'main' | 'submit-leave'
  const [leaveSubScreen, setLeaveSubScreen] = useState(initialLeaveSubScreen);

  useEffect(() => {
    if (initialTaskSubScreen) {
      setTaskSubScreen(initialTaskSubScreen);
    }
  }, [initialTaskSubScreen]);

  useEffect(() => {
    if (initialExpenseSubScreen) {
      setExpenseSubScreen(initialExpenseSubScreen);
    }
  }, [initialExpenseSubScreen]);

  useEffect(() => {
    if (initialLeaveSubScreen) {
      setLeaveSubScreen(initialLeaveSubScreen);
    }
  }, [initialLeaveSubScreen]);

  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [isExpenseModalOpen, setIsExpenseModalOpen] = useState(false);
  const [isLeaveModalOpen, setIsLeaveModalOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  // Bottom navigation should only be shown on main tabs, and hidden during sub-flows like map, camera, review, or details
  const isBottomNavVisible =
    !(activeTab === 'clockin' && clockInSubScreen !== 'main') &&
    !(activeTab === 'tasks' && taskSubScreen !== 'main') &&
    !(activeTab === 'expense' && expenseSubScreen !== 'main') &&
    !(activeTab === 'leave' && leaveSubScreen !== 'main');

  return (
    <div
      className="home-container"
      style={{
        paddingBottom: isBottomNavVisible ? '84px' : '0'
      }}
    >
      {/* HomeHeader is only shown on the Home tab matching Figma */}
      {activeTab === 'home' && (
        <HomeHeader
          onOpenNotifications={() => setIsNotificationsOpen(true)}
          unreadCount={2}
          isEmptyState={isEmptyState}
          onToggleEmptyState={onToggleEmptyState}
        />
      )}

      {/* Tab Views */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', width: '100%' }}>
        {activeTab === 'home' && (
          <HomeView
            isEmpty={isEmptyState}
            onTabJump={(tab) => {
              setActiveTab(tab);
              if (tab === 'clockin') setClockInSubScreen('main');
            }}
          />
        )}

        {activeTab === 'clockin' && (
          <ClockInView
            isEmpty={isEmptyState}
            subScreen={clockInSubScreen}
            onSubScreenChange={setClockInSubScreen}
          />
        )}

        {activeTab === 'tasks' && (
          <TaskView
            isEmpty={isEmptyState}
            subScreen={taskSubScreen}
            onSubScreenChange={setTaskSubScreen}
          />
        )}

        {activeTab === 'expense' && (
          <ExpenseView
            isEmpty={isEmptyState}
            subScreen={expenseSubScreen}
            onSubScreenChange={setExpenseSubScreen}
          />
        )}

        {activeTab === 'leave' && (
          <LeaveView
            isEmpty={isEmptyState}
            subScreen={leaveSubScreen}
            onSubScreenChange={setLeaveSubScreen}
          />
        )}
      </div>

      {/* Bottom Navigation (Only visible on main views, hidden during sub-flows) */}
      {isBottomNavVisible && (
        <BottomNavigation
          activeTab={activeTab}
          onTabChange={(tab) => {
            setActiveTab(tab);
            if (tab === 'clockin') setClockInSubScreen('main');
            if (tab === 'tasks') setTaskSubScreen('main');
            if (tab === 'expense') setExpenseSubScreen('main');
            if (tab === 'leave') setLeaveSubScreen('main');
          }}
        />
      )}

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
