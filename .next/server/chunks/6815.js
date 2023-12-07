"use strict";exports.id=6815,exports.ids=[6815],exports.modules={26815:(e,t,i)=>{i.d(t,{vy:()=>m,JD:()=>_,UZ:()=>d,nn:()=>u,SZ:()=>o,Fk:()=>l,L0:()=>a,gp:()=>s,GS:()=>r,xr:()=>c});var n=i(85325);n.gql`
  mutation RegisterWithEmail($name: String!, $email: String!) {
    RegisterWithEmail(name: $name, email: $email) {
      status
      message
      json
    }
  }
`,n.gql`
  mutation CreateTempUser($birthday: Date!) {
    CreateTempUser(birthday: $birthday) {
      _id
      auth_token
      account_type
    }
  }
`,n.gql`
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
`,n.gql`
  mutation ReSendEmailOTP($email: String!) {
    ReSendEmailOTP(email: $email) {
      status
      message
      json
    }
  }
`,n.gql`
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
`,n.gql`
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
`,n.gql`
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
`,n.gql`
  mutation AddHashtag($text: String!) {
    AddHashtag(text: $text) {
      status
      message
      json
    }
  }
`,n.gql`
  mutation LikeContent($contentId: String!) {
    LikeContent(content_id: $contentId) {
      status
      message
      json
    }
  }
`,n.gql`
  mutation FollowHashtag($hashtagId: String!) {
    FollowHashtag(hashtag_id: $hashtagId) {
      status
      message
      json
    }
  }
`,n.gql`
  mutation FollowUser($userId: String!) {
    FollowUser(user_id: $userId) {
      status
      message
      json
    }
  }
`,n.gql`
  mutation CaptureContentViews($contentId: String!) {
    CaptureContentViews(content_id: $contentId) {
      status
      message
      json
    }
  }
`,n.gql`
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
`,n.gql`
  mutation EditEmailAddress($newEmail: String!) {
    EditEmailAddress(new_email: $newEmail) {
      status
      message
      json
    }
  }
`,n.gql`
  mutation DeleteComment($contentId: String!, $commentId: String!) {
    DeleteComment(content_id: $contentId, comment_id: $commentId) {
      status
      message
      json
    }
  }
`,n.gql`
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
`,n.gql`
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
`,n.gql`
  mutation LikeComment($commentId: String) {
    LikeComment(comment_id: $commentId) {
      status
      message
      json
    }
  }
`,n.gql`
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
`,n.gql`
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
`,n.gql`
  mutation MarkTipAsPaid($tipId: String!) {
    MarkTipAsPaid(tip_id: $tipId) {
      status
      message
      json
    }
  }
`,n.gql`
  mutation AcceptOrDeclineOffer($offerId: String!, $status: String!) {
    AcceptOrDeclineOffer(offer_id: $offerId, status: $status) {
      status
      message
      json
    }
  }
`,n.gql`
  mutation MarkShopOrderAsPaid($orderId: String!) {
    MarkShopOrderAsPaid(order_id: $orderId) {
      status
      message
      json
    }
  }
`,n.gql`
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
`,n.gql`
  mutation GenerateClientSecret($amount: Float!) {
    GenerateClientSecret(amount: $amount) {
      client_secret
      customer
      ephemeralKey
    }
  }
`,n.gql`
  mutation UpdateUserFCMToken($fcmToken: String!, $device: String!) {
    UpdateUserFCMToken(fcm_token: $fcmToken, device: $device) {
      status
      json
      message
    }
  }
`,n.gql`
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
`,n.gql`
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
`,n.gql`
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
`,n.gql`
  mutation DeleteProduct($productId: String!) {
    DeleteProduct(product_id: $productId) {
      status
      message
      json
    }
  }
`,n.gql`
  mutation DeleteAccount($reason: String!) {
    DeleteAccount(reason: $reason) {
      status
      message
      json
    }
  }
`,n.gql`
  mutation CreateShopOrder($productId: String!, $amount: Float) {
    CreateShopOrder(product_id: $productId, amount: $amount) {
      _id
    }
  }
`,n.gql`
  mutation UpdateProduct($productId: String!, $amount: Float!) {
    UpdateProduct(product_id: $productId, amount: $amount) {
      status
      message
      json
    }
  }
`,n.gql`
  mutation UserBlockUse($userId: String) {
    UserBlockUse(user_id: $userId) {
      status
      message
      json
    }
  }
`,n.gql`
  mutation DeleteContent($contentId: String!) {
    DeleteContent(content_id: $contentId) {
      status
      message
      json
    }
  }
`,n.gql`
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
`,n.gql`
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
`,n.gql`
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
`,n.gql`
  query LoginUserWithEmail($email: String) {
    LoginUserWithEmail(email: $email) {
      status
      message
      json
    }
  }
`;let o=n.gql`
  query GetCards($limit: Int, $page: Int) {
    GetCards(limit: $limit, page: $page) {
      _id
      card_type
      description
      name
    }
  }
`,r=n.gql`
  query GetTopics($limit: Int, $page: Int, $search: String) {
    GetTopics(limit: $limit, page: $page, search: $search) {
      _id
      is_active
      posts
      text
    }
  }
`;n.gql`
  query IsHashtagExists($hashtag: String!) {
    IsHashtagExists(hashtag: $hashtag) {
      status
      message
      json
    }
  }
`,n.gql`
  query RootQuery($contentId: String!) {
    GetContentCaption(content_id: $contentId)
  }
`;let a=n.gql`
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
`,s=n.gql`
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
`;n.gql`
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
`;let l=n.gql`
  query AllCategories($limit: Int, $page: Int) {
    AllCategories(limit: $limit, page: $page) {
      _id
      name
      total_contents
      rank
    }
  }
`;n.gql`
  query RootQuery($contentId: String!) {
    ContentLikeCount(content_id: $contentId)
  }
`,n.gql`
  query IsContentLiked($contentId: String!) {
    IsContentLiked(content_id: $contentId) {
      isLiked
      likeCount
    }
  }
`,n.gql`
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
`,n.gql`
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
`,n.gql`
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
`,n.gql`
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
`,n.gql`
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
`,n.gql`
  query GetBanners($page: Int, $limit: Int) {
    GetBanners(page: $page, limit: $limit) {
      _id
      title
      description
      image_url
      link_url
    }
  }
`,n.gql`
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
`,n.gql`
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
`,n.gql`
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
`,n.gql`
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
`,n.gql`
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
`,n.gql`
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
`,n.gql`
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
`,n.gql`
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
`,n.gql`
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
`,n.gql`
  query IsUserNameExists($username: String!) {
    IsUserNameExists(username: $username) {
      status
      message
      json
    }
  }
`,n.gql`
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
`,n.gql`
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
`,n.gql`
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
`,n.gql`
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
`,n.gql`
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
`,n.gql`
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
`,n.gql`
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
`;let c=n.gql`
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
`;n.gql`
  query IsUserBlocked($userId: String!) {
    isUserBlocked(user_id: $userId) {
      status
      message
      json
    }
  }
`,n.gql`
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
`,n.gql`
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
`;let u=n.gql`
  query AdminGetUsers($limit: Int, $page: Int, $search: String) {
    AdminGetUsers(limit: $limit, page: $page, search: $search) {
      _id
      name
      username
      email_admin
      birthday_admin
      auth_type_admin
      created_at
      country
      platform
    }
  }
`,d=n.gql`
  query AdminGetUsersStats {
    AdminGetUsersStats {
      real_users
      registered_via_apple
      registered_via_email
      registered_via_google
      temporal_users
    }
  }
`,m=n.gql`
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
`,_=n.gql`
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
`}};