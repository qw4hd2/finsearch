'use client';

import { Tabs } from '@mantine/core';
import ContactHighlights from './ContactHighlights/ContactHighlights';
import LatestUpdates from './LatestUpdates/LatestUpdates';
import Metrics from './Metrics/Metrics';
import ResearchNotes from './ResearchNotes/ResearchNotes';
import TopFirms from './TopFirms/TopFirms';
import Webinar from './Webinar&Training/Webinar&Training';

export default function TabMenu() {
  return (
    <Tabs defaultValue="all">
      <div style={{ width: '70%' }}>
        <Tabs.List grow mb="md">
          <Tabs.Tab value="all">All</Tabs.Tab>
          <Tabs.Tab value="metrics">Metrics</Tabs.Tab>
          <Tabs.Tab value="top-firms">Top Firms</Tabs.Tab>
          <Tabs.Tab value="latest-updates">Latest Updates</Tabs.Tab>
          <Tabs.Tab value="content-highlights">Content Highlights</Tabs.Tab>
          <Tabs.Tab value="research-notes">Research Notes</Tabs.Tab>
          <Tabs.Tab value="webinar">Webinar & Training</Tabs.Tab>
        </Tabs.List>
      </div>

      {/* all Panels */}
      <Tabs.Panel value="all">
        <Metrics />
        <TopFirms />
        <LatestUpdates />
        <ContactHighlights />
        <ResearchNotes />
        <Webinar />
      </Tabs.Panel>

      <Tabs.Panel value="metrics">
        <Metrics />
      </Tabs.Panel>

      <Tabs.Panel value="top-firms">
        <TopFirms />
      </Tabs.Panel>

      <Tabs.Panel value="latest-updates">
        <LatestUpdates />
      </Tabs.Panel>

      <Tabs.Panel value="content-highlights">
        <ContactHighlights />
      </Tabs.Panel>

      <Tabs.Panel value="research-notes">
        <ResearchNotes />
      </Tabs.Panel>

      <Tabs.Panel value="webinar">
        <Webinar />
      </Tabs.Panel>
    </Tabs>
  );
}
