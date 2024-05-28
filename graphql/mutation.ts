import { gql } from "@apollo/client";

export const ADMIN_WARN = gql`
  mutation AdminGiveWarningStrike(
    $userId: String!
    $type: String!
    $reason: String
  ) {
    AdminGiveWarningStrike(user_id: $userId, type: $type, reason: $reason) {
      status
      message
      json
    }
  }
`;
export const ADMIN_BLOCK = gql`
  mutation AdminBlockUser($userId: String!, $warningStrikeId: String!) {
    AdminBlockUser(user_id: $userId, warning_strike_id: $warningStrikeId) {
      status
      message
      json
    }
  }
`;
export const ADD_CAT = gql`
  mutation AddCategories($name: String!) {
    AddCategories(name: $name) {
      status
      message
      json
    }
  }
`;
export const DELETE_CAT = gql`
  mutation AdminDeleteCategoriy($name: String!) {
    AdminDeleteCategoriy(name: $name) {
      status
      message
      json
    }
  }
`;
export const DELETE_CONTENT = gql`
  mutation AdminDeleteContent($contentId: String!) {
    AdminDeleteContent(content_id: $contentId) {
      status
      message
      json
    }
  }
`;
export const EDIT_CONTENT = gql`
  mutation AdminEditContent($contentId: String!, $caption: String) {
    AdminEditContent(content_id: $contentId, caption: $caption) {
      status
      message
      json
    }
  }
`;
export const CHANGE_OWNERSHIP = gql`
  mutation AdminChangeHashtagOwnership(
    $hashtagId: String
    $newOwnerId: String
  ) {
    AdminChangeHashtagOwnership(
      hashtag_id: $hashtagId
      new_owner_id: $newOwnerId
    ) {
      status
      message
      json
    }
  }
`;
export const BLOCK_HASHTAG = gql`
  mutation AdminBlockHashtag($hashtagId: String!) {
    AdminBlockHashtag(hashtag_id: $hashtagId) {
      status
      message
      json
    }
  }
`;
export const REPORT_ACTION = gql`
  mutation Admin_ReportAction($reportId: String!, $action: String!) {
    Admin_ReportAction(report_id: $reportId, action: $action) {
      status
      message
      json
    }
  }
`;
export const GET_WARNING = gql`
  query GetUserWarningStrikes($userId: String!, $limit: Int, $page: Int) {
    GetUserWarningStrikes(user_id: $userId, limit: $limit, page: $page) {
      _id
      type
      strike_count
      reason
      status
    }
  }
`;

export const VERIFY_OTP = gql`
  mutation ValidateEmailVerifyOTP(
    $email: String!
    $otp: String!
    $isAuth: Boolean!
  ) {
    ValidateEmailVerifyOTP(email: $email, OTP: $otp, isAuth: $isAuth) {
      _id
      name
      auth_token
      account_type
      email
      birthday
      username
      auth_type
      account {
        _id
        balance
      }
      followers
      following
      bio
      cover_picture
      phone_number
      profile_picture
      socials
      is_blocked
    }
  }
`;

export const CHANGE_WITHDRAW_REQUEST_STATUS = gql`
mutation AdminUpdateWithdrawStatus($withdrawId: String, $status: String) {
  AdminUpdateWithdrawStatus(withdraw_id: $withdrawId, status: $status) {
    status
    message
    json
  }
}`;