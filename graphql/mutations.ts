import { gql } from "@apollo/client";

export const SIGN_WITH_EMAIL = gql`
  mutation RegisterWithEmail($name: String!, $email: String!) {
    RegisterWithEmail(name: $name, email: $email) {
      status
      message
      json
    }
  }
`;

export const CREATE_TEMP_USER = gql`
  mutation CreateTempUser($birthday: Date!) {
    CreateTempUser(birthday: $birthday) {
      _id
      auth_token
      account_type
    }
  }
`;

export const UPLOAD_PHONE_CONTACT = gql`
  mutation UploadPhoneContact(
    $name: [String!]
    $phone: [String!]
    $email: [String!]
  ) {
    UploadPhoneContact(name: $name, phone: $phone, email: $email) {
      contacts {
        _id
        name
        email
        phone
      }
      uploader {
        _id
        name
      }
    }
  }
`;

export const RESEND_OTP = gql`
  mutation ReSendEmailOTP($email: String!) {
    ReSendEmailOTP(email: $email) {
      status
      message
      json
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

export const CREATE_CONTENT = gql`
  mutation CreateContent(
    $caption: String
    $categories: [String]!
    $hashtags: [String]!
    $topicId: String
    $cardId: String!
    $contentUrl: String!
    $thumbnailUrl: String!
    $taggedUsers: [String]
    $acceptPermission: Boolean
  ) {
    CreateContent(
      caption: $caption
      categories: $categories
      hashtags: $hashtags
      topic_id: $topicId
      card_id: $cardId
      content_url: $contentUrl
      thumbnail_url: $thumbnailUrl
      tagged_users: $taggedUsers
      acceptPermission: $acceptPermission
    ) {
      _id
      creator {
        _id
        name
        auth_token
        account_type
        email
        birthday
        username
        auth_type
        phone_number
        profile_picture
        cover_picture
        bio
        socials
        accept_offers
        account {
          _id
          balance
        }
        followers
        following
        is_following
      }
      hashtags {
        _id
        text
      }
      likes
      views
      topic {
        text
        is_active
        posts
        _id
      }
      thumbnail_url
      content_url
      caption
      isLiked
      shares
      number_of_comments
      tip_status
      total_tips
      shared_count
      card {
        card_type
        description
        name
        _id
      }
      categories {
        name
      }
    }
  }
`;

export const UPDATE_USER = gql`
  mutation UpdateUser(
    $country: String
    $bio: String
    $username: String
    $name: String
    $coverPicture: String
    $profilePicture: String
    $phoneNumber: String
    $socials: Socials
  ) {
    UpdateUser(
      country: $country
      bio: $bio
      username: $username
      name: $name
      cover_picture: $coverPicture
      profile_picture: $profilePicture
      phone_number: $phoneNumber
      socials: $socials
    ) {
      _id
      name
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

export const ADD_HASHTAG = gql`
  mutation AddHashtag($text: String!) {
    AddHashtag(text: $text) {
      status
      message
      json
    }
  }
`;

export const LIKE_CONTENT = gql`
  mutation LikeContent($contentId: String!) {
    LikeContent(content_id: $contentId) {
      status
      message
      json
    }
  }
`;
export const FOLLOW_HASHTAG = gql`
  mutation FollowHashtag($hashtagId: String!) {
    FollowHashtag(hashtag_id: $hashtagId) {
      status
      message
      json
    }
  }
`;
export const FOLLOW_USER = gql`
  mutation FollowUser($userId: String!) {
    FollowUser(user_id: $userId) {
      status
      message
      json
    }
  }
`;
export const INCREASE_VIEW = gql`
  mutation CaptureContentViews($contentId: String!) {
    CaptureContentViews(content_id: $contentId) {
      status
      message
      json
    }
  }
`;

export const COMMENT_CONETENT = gql`
  mutation CommentOnContent(
    $contentId: String!
    $text: String!
    $parentId: String
    $taggedUsers: [String]
  ) {
    CommentOnContent(
      content_id: $contentId
      text: $text
      parent_id: $parentId
      tagged_users: $taggedUsers
    ) {
      status
      message
      json
    }
  }
`;

export const EDIT_EMAIL = gql`
  mutation EditEmailAddress($newEmail: String!) {
    EditEmailAddress(new_email: $newEmail) {
      status
      message
      json
    }
  }
`;

export const DELETE_COMMENT = gql`
  mutation DeleteComment($contentId: String!, $commentId: String!) {
    DeleteComment(content_id: $contentId, comment_id: $commentId) {
      status
      message
      json
    }
  }
`;

export const EDIT_SHOP_LINK = gql`
  mutation EditShopLink($usernamePrice: Int!, $followingPrice: Int!) {
    EditShopLink(
      username_price: $usernamePrice
      following_price: $followingPrice
    ) {
      status
      message
      json
    }
  }
`;

export const EDIT_USER_NOTIFICATION = gql`
  mutation EditNotificationSetting(
    $votesNotifications: Boolean
    $likesNotifications: Boolean
    $commentsNotifications: Boolean
    $tipsNotifications: Boolean
    $shopNotifications: Boolean
    $offersNotifications: Boolean
    $followNotifications: Boolean
  ) {
    EditNotificationSetting(
      votes_notifications: $votesNotifications
      likes_notifications: $likesNotifications
      comments_notifications: $commentsNotifications
      tips_notifications: $tipsNotifications
      shop_notifications: $shopNotifications
      offers_notifications: $offersNotifications
      follow_notifications: $followNotifications
    ) {
      message
      status
      json
    }
  }
`;

export const LIKE_COMMENT = gql`
  mutation LikeComment($commentId: String) {
    LikeComment(comment_id: $commentId) {
      status
      message
      json
    }
  }
`;
export const UPDATE_HASHTAG_PIC = gql`
  mutation ChangeHashtagProfilePicture(
    $hashtagId: String!
    $profilePicture: String!
  ) {
    ChangeHashtagProfilePicture(
      hashtag_id: $hashtagId
      profile_picture: $profilePicture
    ) {
      status
      message
      json
    }
  }
`;

export const CREATE_TIP = gql`
  mutation CreateTip(
    $contentId: String!
    $receiverId: String!
    $amount: Float!
  ) {
    CreateTip(
      content_id: $contentId
      receiver_id: $receiverId
      amount: $amount
    ) {
      status
      _id
      amount
    }
  }
`;

export const MARK_TIP_PAID = gql`
  mutation MarkTipAsPaid($tipId: String!) {
    MarkTipAsPaid(tip_id: $tipId) {
      status
      message
      json
    }
  }
`;

export const ACCEPT_DECLINE_OFFER = gql`
  mutation AcceptOrDeclineOffer($offerId: String!, $status: String!) {
    AcceptOrDeclineOffer(offer_id: $offerId, status: $status) {
      status
      message
      json
    }
  }
`;

export const MARK_SHOP_ORDER_AS_PAID = gql`
  mutation MarkShopOrderAsPaid($orderId: String!) {
    MarkShopOrderAsPaid(order_id: $orderId) {
      status
      message
      json
    }
  }
`;

export const ACCEPT_DECLINE_ORDER = gql`
  mutation AcceptOrdeclineShopOrder(
    $orderId: String!
    $status: String!
    $userType: String!
  ) {
    AcceptOrdeclineShopOrder(
      order_id: $orderId
      status: $status
      user_type: $userType
    ) {
      status
      message
      json
    }
  }
`;

export const GENERATE_CLIENT_SECRET = gql`
  mutation GenerateClientSecret($amount: Float!) {
    GenerateClientSecret(amount: $amount) {
      client_secret
      customer
      ephemeralKey
    }
  }
`;
export const UPDATE_USER_FCM_TOKEN = gql`
  mutation UpdateUserFCMToken($fcmToken: String!, $device: String!) {
    UpdateUserFCMToken(fcm_token: $fcmToken, device: $device) {
      status
      json
      message
    }
  }
`;
export const CREATE_OFFER = gql`
  mutation CreateOffer(
    $amount: Float!
    $ownerId: String!
    $offerType: String!
    $item: String!
  ) {
    CreateOffer(
      amount: $amount
      owner_id: $ownerId
      offer_type: $offerType
      item: $item
    ) {
      status
      message
      json
    }
  }
`;

export const CREATE_PRODUCT = gql`
  mutation CreateProduct(
    $shopId: String!
    $productType: String!
    $item: String!
    $amount: Float!
  ) {
    CreateProduct(
      shop_id: $shopId
      product_type: $productType
      item: $item
      amount: $amount
    ) {
      _id
      shop {
        _id
      }
      owner {
        _id
        username
        profile_picture
      }
      amount
      product_type
      item
    }
  }
`;

export const CREATE_REPORT = gql`
  mutation CreateReport(
    $reportType: String!
    $reportId: String!
    $message: String
  ) {
    CreateReport(
      report_type: $reportType
      report_id: $reportId
      message: $message
    ) {
      status
      message
    }
  }
`;

export const DELETE_PRODUCT = gql`
  mutation DeleteProduct($productId: String!) {
    DeleteProduct(product_id: $productId) {
      status
      message
      json
    }
  }
`;
export const DELETE_ACCOUNT = gql`
  mutation DeleteAccount($reason: String!) {
    DeleteAccount(reason: $reason) {
      status
      message
      json
    }
  }
`;
export const CREATE_ORDER = gql`
  mutation CreateShopOrder($productId: String!, $amount: Float) {
    CreateShopOrder(product_id: $productId, amount: $amount) {
      _id
    }
  }
`;

export const UPDATE_PRODUCT = gql`
  mutation UpdateProduct($productId: String!, $amount: Float!) {
    UpdateProduct(product_id: $productId, amount: $amount) {
      status
      message
      json
    }
  }
`;

export const BLOCK_USER = gql`
  mutation UserBlockUse($userId: String) {
    UserBlockUse(user_id: $userId) {
      status
      message
      json
    }
  }
`;
export const DELETE_CONTENT = gql`
  mutation DeleteContent($contentId: String!) {
    DeleteContent(content_id: $contentId) {
      status
      message
      json
    }
  }
`;

// export const UNBLOCK_USER = gql`
//   mutation UnblockUser($blockStatusId: String!) {
//     UnblockUser(block_status_id: $blockStatusId) {
//       status
//       message
//       json
//     }
//   }
// `;

export const EDIT_CONTENT = gql`
  mutation EditContent(
    $caption: String!
    $contentId: String
    $taggedUsers: [String]
  ) {
    EditContent(
      caption: $caption
      content_id: $contentId
      tagged_users: $taggedUsers
    ) {
      _id
      shares
      isLiked
      content_url
      caption
      thumbnail_url
      likes
      views
      number_of_comments
      tip_status
      total_tips
      shared_count
    }
  }
`;
