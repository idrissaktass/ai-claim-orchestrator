export type ProcessStatus = 'Completed' | 'In Progress' | 'Pending' | 'Report Completed';

interface BaseDetail {
  title: string;
  status: ProcessStatus;
}

export interface TowingDetail extends BaseDetail {
  title: 'Towing Service';
  pickupLocation: string;
  towingDate: string;
}

export interface AppraisalDetail extends BaseDetail {
  title: 'Appraisal';
  expertAssignmentDate: string;
  expertInfo: string;
  contact: string;
}

export interface FileReviewDetail extends BaseDetail {
  title: 'File Review';
  reviewReferralDate: string;
  reviewCompletionDate: string;
}

export interface DeductionDetail extends BaseDetail {
  title: 'Deduction Reason';
  actionRequired: string;
  occupationalDeduction: string;
  policyDeductible: string;
}

export type ProcessDetail = TowingDetail | AppraisalDetail | FileReviewDetail | DeductionDetail | any;

export interface ClaimData {
  title: string;
  fileNo: string;
  estimatedRemainingTime: string;
  currentStatus: string;
  processDetails: ProcessDetail[];
}