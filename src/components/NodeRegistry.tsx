import React from 'react';
import { TowingNode } from './nodes/TowingNode';
import { AppraisalNode } from './nodes/AppraisalNode';
import { DefaultNode } from './nodes/DefaultNode';
import { DeductionNode } from './nodes/DeductionNode';
import { NoteNode } from './nodes/NoteNode';

export const NODE_REGISTRY: Record<string, React.FC<{ data: any }>> = {
  'Towing Service': TowingNode,
  'Appraisal': AppraisalNode,
  'Claim Notification': DefaultNode,
  'Substitute Rental Vehicle': DefaultNode, 
  'File Review': DefaultNode, 
  'Deduction Reason': DeductionNode,
  'Information Note': NoteNode,
  'Payment Information': DefaultNode,
  'Closed': DefaultNode,
};

export const getComponentForNode = (title: string) => {
  return NODE_REGISTRY[title] || DefaultNode;
};