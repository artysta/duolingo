const mainFields = [
    'joinedClassroomIds',
    'streak',
    'motivation',
    'acquisitionSurveyReason',
    'shouldForceConnectPhoneNumber',
    'picture',
    'learningLanguage',
    'hasFacebookId',
    'shakeToReportEnabled',
    'liveOpsFeatures',
    'canUseModerationTools',
    'id',
    'betaStatus',
    'hasGoogleId',
    'privacySettings',
    'fromLanguage',
    'hasRecentActivity15',
    '_achievements',
    'observedClassroomIds',
    'username',
    'bio',
    'profileCountry',
    'globalAmbassadorStatus',
    'currentCourseId',
    'hasPhoneNumber',
    'creationDate',
    'achievements',
    'hasPlus',
    'name',
    'roles',
    'classroomLeaderboardsEnabled',
    'emailVerified',
    'courses',
    'totalXp'
];

const coursesFields = [
    'preload',
    'placementTestAvailable',
    'authorId',
    'title',
    'learningLanguage',
    'xp',
    'healthEnabled',
    'fromLanguage',
    'crowns',
    'id'
]

/**
 * This array contains some "details" of the languages.
 */
const languages = {
    'pl': {
        fullName: 'Polish',
        emojiFlag: '🇵🇱'
    },
    'en': {
        fullName: 'English',
        emojiFlag: '🇬🇧'
    },
    'de': {
        fullName: 'German',
        emojiFlag: '🇩🇪'
    },
    'es': {
        fullName: 'Spanish',
        emojiFlag: '🇪🇸'
    },
    'fr': {
        fullName: 'French',
        emojiFlag: '🇫🇷'
    },
    'it': {
        fullName: 'Italian',
        emojiFlag: '🇮🇹'
    },
    'fi': {
        fullName: 'Finnish',
        emojiFlag: '🇫🇮'
    },
    'sv': {
        fullName: 'Swedish',
        emojiFlag: '🇸🇪'
    }
};

module.exports = { languages };