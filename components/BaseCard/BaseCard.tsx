import React from 'react';
import { Card, ScrollArea } from '@mantine/core';

interface BaseCardProps {
  avatarSrc?: string;
  headerContent?: React.ReactNode;
  content: React.ReactNode; // Different inner content for each section
}

const BaseCard: React.FC<BaseCardProps> = ({ headerContent, content }) => {
  return (
    <Card shadow="md" radius="md" padding="lg" className="h-[400px] w-full">
      {/* Header Section */}
      {headerContent}

      {/* Scrollable Content Area */}
      <ScrollArea className="scroll-bar" style={{ maxHeight: '180px', overflowY: 'auto' }}>
        {content}
      </ScrollArea>
    </Card>
  );
};

export default BaseCard;
