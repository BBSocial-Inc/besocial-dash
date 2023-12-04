import { gql } from "@apollo/client";

export const SIGN_WITH_APPLE = gql`
  query LoginUserWithApple($token: String!, $userId: String, $name: String) {
    LoginUserWithApple(token: $token, user_id: $userId, name: $name) {
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

export const SIGN_WITH_GOOGLE = gql`
  query LoginUserWithGoogle($idToken: String!, $userId: String) {
    LoginUserWithGoogle(idToken: $idToken, user_id: $userId) {
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

export const LOGIN_WITH_EMAIL = gql`
  query LoginUserWithEmail($email: String) {
    LoginUserWithEmail(email: $email) {
      status
      message
      json
    }
  }
`;

export const GET_CARDS = gql`
  query GetCards($limit: Int, $page: Int) {
    GetCards(limit: $limit, page: $page) {
      _id
      card_type
      description
      name
    }
  }
`;

export const GET_TOPICS = gql`
  query GetTopics($limit: Int, $page: Int, $search: String) {
    GetTopics(limit: $limit, page: $page, search: $search) {
      _id
      is_active
      posts
      text
    }
  }
`;

export const HASHTAG_EXIST = gql`
  query IsHashtagExists($hashtag: String!) {
    IsHashtagExists(hashtag: $hashtag) {
      status
      message
      json
    }
  }
`;

export const GET_CONTENT_CAPTION = gql`
  query RootQuery($contentId: String!) {
    GetContentCaption(content_id: $contentId)
  }
`;
export const GET_HASHTAGS = gql`
  query AdminGetAllHashtags($limit: Int, $page: Int) {
    AdminGetAllHashtags(limit: $limit, page: $page) {
      data {
        _id
        contentViews
        creator {
          _id
          name
        }
        posts
        rank
        text
        followers
        owner {
          _id
          name
        }
        total_contents
      }
      total
    }
  }
`;
export const GET_REPORTS = gql`
  query ListReport($limit: Int, $page: Int) {
    ListReport(limit: $limit, page: $page) {
      _id
      is_read
      message
      report_type
      reported_by {
        _id
        name
        username
      }
      report_id
      action
      action_at
    }
  }
`;

export const GET_HASHTAG_BY_ID = gql`
  query GetHashtagById($hashtagId: String!) {
    GetHashtagById(hashtag_id: $hashtagId) {
      _id
      creator {
        profile_picture
        _id
        name
        username
        cover_picture
      }
      owner {
        _id
        name
        username
        profile_picture
        cover_picture
        bio
        socials
        followers
        following
        is_following
      }
      text
      profile_picture
      followers
      posts
      contentViews
      profileViews
      is_following
      rank
    }
  }
`;

export const GET_CATEGORIES = gql`
  query AllCategories($limit: Int, $page: Int) {
    AllCategories(limit: $limit, page: $page) {
      _id
      name
      total_contents
      rank
    }
  }
`;

export const CONTENT_LIKE_COUNT = gql`
  query RootQuery($contentId: String!) {
    ContentLikeCount(content_id: $contentId)
  }
`;

export const GET_IS_LIKED_CONTENT = gql`
  query IsContentLiked($contentId: String!) {
    IsContentLiked(content_id: $contentId) {
      isLiked
      likeCount
    }
  }
`;
export const GET_MAIN_SEARCH = gql`
  query GetAccounts($search: String, $limit: Int, $page: Int) {
    GetAccounts(search: $search, limit: $limit, page: $page) {
      _id
      name
      username
      profile_picture
      __typename
    }
    GetTopics(search: $search, limit: $limit, page: $page) {
      _id
      text
      posts
      __typename
    }
    AllHashtags(search: $search, limit: $limit, page: $page) {
      _id
      creator {
        profile_picture
        username
      }
      text
      profile_picture
      __typename
    }
  }
`;

export const SEARCH_SUGGESTIONS = gql`
  query GetSearchSuggestions($search: String) {
    GetSearchSuggestions(search: $search) {
      ... on Topic {
        _id
        text
        posts
        __typename
      }
      ... on Hashtag {
        __typename
        _id
        contentViews
        profile_picture
        text
        creator {
          profile_picture
          username
          cover_picture
        }
      }
      ... on User {
        __typename
        _id
        username
        name
        profile_picture
      }
    }
  }
`;

export const GET_CONTENTS_HASHTAG = gql`
  query GetContentBasedOnHashtag(
    $cardId: String
    $hashtag: String!
    $sortBy: String
    $page: Int
    $limit: Int
    $userId: String
  ) {
    GetContentBasedOnHashtag(
      card_id: $cardId
      hashtag: $hashtag
      sortBy: $sortBy
      page: $page
      limit: $limit
      user_id: $userId
    ) {
      _id
      creator {
        _id
        name
        username
        profile_picture
        cover_picture
        bio
        socials
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

export const GET_CONTENT_BY_ID = gql`
  query GetContentById($contentId: String) {
    GetContentById(content_id: $contentId) {
      _id
      creator {
        _id
        name
        username
        profile_picture
        cover_picture
        bio
        socials
        followers
        following
        is_following
      }
      topic {
        _id
        text
      }
      content_url
      caption
      thumbnail_url
      hashtags {
        text
        _id
      }
      likes
      views
      isLiked
      number_of_comments
    }
  }
`;

export const GET_COMMENTS = gql`
  query GetComments(
    $contentId: String!
    $limit: Int
    $page: Int
    $repliesLimit2: Int
    $repliesPage2: Int
  ) {
    GetComments(content_id: $contentId, limit: $limit, page: $page) {
      _id
      user {
        _id
        name
        username
        phone_number
        profile_picture
        cover_picture
        bio
        socials
        followers
        following
        is_following
      }
      text
      repliesCount
      replies(limit: $repliesLimit2, page: $repliesPage2) {
        _id
        repliesCount
        text
        user {
          _id
          name
          username
        }
        updated_at
      }
      updated_at
      likes
      isLiked
    }
  }
`;

export const GET_BANNERS = gql`
  query GetBanners($page: Int, $limit: Int) {
    GetBanners(page: $page, limit: $limit) {
      _id
      title
      description
      image_url
      link_url
    }
  }
`;

export const GET_MORE_CONTENTS = gql`
  query GetContentBasedOnHashtag(
    $hashtag: String!
    $limit: Int
    $page: Int
    $cardId: String
    $userId: String
    $sortBy: String
  ) {
    GetContentBasedOnHashtag(
      hashtag: $hashtag
      limit: $limit
      page: $page
      card_id: $cardId
      user_id: $userId
      sortBy: $sortBy
    ) {
      _id
      creator {
        _id
        name
        username
        phone_number
        profile_picture
        cover_picture
        bio
        socials
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

export const GET_MORE_CONTENTS_FOR_USER = gql`
  query GetContentBasedOnCard(
    $limit: Int
    $page: Int
    $cardId: String
    $userId: String
  ) {
    GetContentBasedOnCard(
      limit: $limit
      page: $page
      card_id: $cardId
      user_id: $userId
    ) {
      _id
      creator {
        _id
        name
        username
        profile_picture
        cover_picture
        bio
        socials
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

export const GET_CONTENTS_TOPIC = gql`
  query GetContentsBasedOnTopic($topicId: String, $limit: Int, $page: Int) {
    GetContentsBasedOnTopic(topic_id: $topicId, limit: $limit, page: $page) {
      _id
      creator {
        _id
        name
        username
        profile_picture
        cover_picture
        bio
        socials
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

export const GET_CONTENTS_BY_CARD = gql`
  query GetContentBasedOnCard(
    $cardId: String
    $page: Int
    $limit: Int
    $userId: String
  ) {
    GetContentBasedOnCard(
      card_id: $cardId
      page: $page
      limit: $limit
      user_id: $userId
    ) {
      _id
      creator {
        _id
        name
        username
        profile_picture
        cover_picture
        bio
        socials
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

export const GET_FOLLOWS = gql`
  query GetUserFollowers($userId: String, $limit: Int, $page: Int) {
    GetUserFollowers(user_id: $userId, limit: $limit, page: $page) {
      _id
      name
      username
      profile_picture
      cover_picture
      bio
      socials
      followers
      following
      is_following
    }
    GetUserFollowings(user_id: $userId, limit: $limit, page: $page) {
      _id
      name
      username
      profile_picture
      cover_picture
      bio
      socials
      followers
      following
      is_following
    }
  }
`;

export const GET_HASHTAG_FOLLOWS = gql`
  query RootQuery($hashtagId: String!) {
    GetHashtagFollowers(hashtag_id: $hashtagId) {
      account_type
      email
      username
      auth_type
      phone_number
      cover_picture
      profile_picture
      is_following
      _id
      name
    }
  }
`;

export const GET_USER = gql`
  query GetUser($userId: String, $username: String) {
    GetUser(user_id: $userId, username: $username) {
      _id
      name
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
      bs_pin
      following
      is_following
    }
  }
`;

export const GET_USER_NOTIFICATION = gql`
  query GetNotificationSetting {
    GetNotificationSetting {
      votes_notifications
      likes_notifications
      comments_notifications
      tips_notifications
      shop_notifications
      offers_notifications
      follow_notifications
      _id
    }
  }
`;

export const GET_USER_SHOP = gql`
  query GetUserShop($shopToken: String, $userId: String) {
    GetUserShop(shop_token: $shopToken, user_id: $userId) {
      _id
      owner {
        _id
        username
        profile_picture
        name
      }
      shop_token
      products {
        item
        _id
        amount
        product_type
      }
    }
  }
`;

export const IS_USERNAME_EXIST = gql`
  query IsUserNameExists($username: String!) {
    IsUserNameExists(username: $username) {
      status
      message
      json
    }
  }
`;

export const GET_OFFERS_MADE = gql`
  query GetOffersMade {
    GetOffersMade {
      __typename
      _id
      amount
      owner {
        _id
        username
        profile_picture
      }
      user {
        _id
        username
        profile_picture
      }
      offer_type
      owner_status
      user_status
    }
  }
`;

export const GET_OFFERS_RECEIVED = gql`
  query GetOffersReceived {
    GetOffersReceived {
      __typename
      _id
      amount
      owner {
        _id
        username
        profile_picture
      }
      user {
        _id
        username
        profile_picture
      }
      offer_type
      owner_status
      user_status
    }
  }
`;

export const GET_TIPS = gql`
  query GetTips($type: String!, $limit: Int, $page: Int) {
    GetTips(type: $type, limit: $limit, page: $page) {
      __typename
      _id
      content {
        _id
        thumbnail_url
      }
      receiver {
        _id
        username
        profile_picture
      }
      user {
        _id
        username
        profile_picture
      }
      amount
      status
    }
  }
`;

export const GET_ACTIVITIES = gql`
  query GetUserAppNotification {
    GetUserAppNotification {
      _id
      user {
        _id
        name
        username
        profile_picture
        cover_picture
        bio
        socials
        followers
        following
        is_following
      }
      notification_type
      status
      content {
        _id
        creator {
          _id
          name
          username
          profile_picture
          cover_picture
          bio
          socials
          followers
          following
          is_following
        }
        card {
          _id
          card_type
          name
          description
        }
        topic {
          _id
          text
          posts
          is_active
        }
        content_url
        caption
        thumbnail_url
        categories {
          _id
          name
        }
        hashtags {
          _id
          text
        }
        likes
        views
        isLiked
        number_of_comments
      }
      comment {
        _id
        text
      }
      notified_by {
        _id
        name
        username
        profile_picture
        cover_picture
        bio
        socials
        followers
        following
        is_following
      }
    }
  }
`;

export const GET_SHOP_ORDERS = gql`
  query GetShopOrders(
    $type: String!
    $limit: Int
    $page: Int
    $status: String
  ) {
    GetShopOrders(type: $type, limit: $limit, page: $page, status: $status) {
      _id
      amount
      user {
        name
        profile_picture
        username
        phone_number
        _id
      }
      status
      owner {
        name
        profile_picture
        username
        _id
      }
      product {
        amount
        product_type
        item
        _id
      }
    }
  }
`;

export const MUST_WATCH = gql`
  query MustWatchContents($limit: Int, $page: Int) {
    MustWatchContents(limit: $limit, page: $page) {
      _id
      creator {
        _id
        name
        username
        profile_picture
        cover_picture
        bio
        socials
        followers
        following
        is_following
      }
      card {
        _id
        card_type
        name
        description
      }
      topic {
        _id
        text
        posts
        is_active
      }
      content_url
      caption
      thumbnail_url
      categories {
        _id
        name
      }
      hashtags {
        _id
        text
      }
      likes
      views
      isLiked
      number_of_comments
    }
  }
`;
export const FOLLOWING_CONTENTs = gql`
  query FollowingContents($limit: Int, $page: Int) {
    FollowingContents(limit: $limit, page: $page) {
      _id
      creator {
        _id
        name
        username
        profile_picture
        cover_picture
        bio
        socials
        followers
        following
        is_following
      }
      card {
        _id
        card_type
        name
        description
      }
      topic {
        _id
        text
        posts
        is_active
      }
      content_url
      caption
      thumbnail_url
      hashtags {
        _id
        text
      }
      categories {
        _id
        name
      }
      likes
      views
      isLiked
      number_of_comments
    }
  }
`;
export const TRENDING_USERS = gql`
  query TrendingUser($limit: Int, $page: Int) {
    TrendingUser(limit: $limit, page: $page) {
      _id
      name
      username
      profile_picture
      cover_picture
      bio
      socials
      followers
      following
      is_following
    }
  }
`;
export const IS_USER_BLOCKED = gql`
  query IsUserBlocked($userId: String!) {
    isUserBlocked(user_id: $userId) {
      status
      message
      json
    }
  }
`;

export const GET_PRESIGNED_URL = gql`
  query GetS3PreSignedUrls($fileNames: [String!]) {
    GetS3PreSignedUrls(fileNames: $fileNames) {
      urls {
        file
        key
        put
        get
        delete
      }
    }
  }
`;

export const GET_USER_TO_TAG = gql`
  query GetSearchSuggestions($search: String) {
    GetSearchSuggestions(search: $search) {
      ... on User {
        _id
        name
        username
        profile_picture
      }
    }
  }
`;

export const ADMIN_USER = gql`
  query AdminGetUsers($limit: Int, $page: Int, $search: String) {
    AdminGetUsers(limit: $limit, page: $page, search: $search) {
      _id
      name
      username
      email_admin
      birthday_admin
      auth_type_admin
      created_at
    }
  }
`;

export const ADMIN_STATS = gql`
  query AdminGetUsersStats {
    AdminGetUsersStats {
      real_users
      registered_via_apple
      registered_via_email
      registered_via_google
      temporal_users
    }
  }
`;

export const ADMIN_CONTENTS = gql`
  query AdminGetAllContents($limit: Int, $page: Int) {
    AdminGetAllContents(limit: $limit, page: $page) {
      total
      data {
        _id
        caption
        content_url
        hashtags {
          _id
          text
        }
        likes
        number_of_comments
        views
        creator {
          _id
          username
        }
        thumbnail_url
      }
    }
  }
`;

export const ADMIN_REFERS = gql`
  query GetReferredUsers {
    GetReferredUsers {
      _id
      referrer {
        _id
        name
        username
      }
      name
      username
    }
  }
`;
