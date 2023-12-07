"use strict";exports.id=8169,exports.ids=[8169],exports.modules={68169:(t,e,n)=>{n.d(e,{Bf:()=>s,OT:()=>a,PJ:()=>m,Vk:()=>$,bU:()=>h,k3:()=>r,ly:()=>u,pK:()=>d,rf:()=>l,rq:()=>g,rz:()=>o,y$:()=>c});var i=n(85325);let a=i.gql`
  query LoginUserWithEmail($email: String) {
    LoginUserWithEmail(email: $email) {
      status
      message
      json
    }
  }
`,s=i.gql`
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
`,r=i.gql`
  mutation AdminBlockUser($userId: String!, $warningStrikeId: String!) {
    AdminBlockUser(user_id: $userId, warning_strike_id: $warningStrikeId) {
      status
      message
      json
    }
  }
`,o=i.gql`
  mutation AddCategories($name: String!) {
    AddCategories(name: $name) {
      status
      message
      json
    }
  }
`,g=i.gql`
  mutation AdminDeleteCategoriy($name: String!) {
    AdminDeleteCategoriy(name: $name) {
      status
      message
      json
    }
  }
`,d=i.gql`
  mutation AdminDeleteContent($contentId: String!) {
    AdminDeleteContent(content_id: $contentId) {
      status
      message
      json
    }
  }
`,m=i.gql`
  mutation AdminEditContent($contentId: String!, $caption: String) {
    AdminEditContent(content_id: $contentId, caption: $caption) {
      status
      message
      json
    }
  }
`,l=i.gql`
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
`,u=i.gql`
  mutation AdminBlockHashtag($hashtagId: String!) {
    AdminBlockHashtag(hashtag_id: $hashtagId) {
      status
      message
      json
    }
  }
`,$=i.gql`
  mutation Admin_ReportAction($reportId: String!, $action: String!) {
    Admin_ReportAction(report_id: $reportId, action: $action) {
      status
      message
      json
    }
  }
`,c=i.gql`
  query GetUserWarningStrikes($userId: String!, $limit: Int, $page: Int) {
    GetUserWarningStrikes(user_id: $userId, limit: $limit, page: $page) {
      _id
      type
      strike_count
      reason
      status
    }
  }
`,h=i.gql`
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
`}};