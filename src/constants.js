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
const languages = [
    {
        shortName: 'pl',
        fullName: 'Polish',
        emojiFlag: '🇵🇱'
    },
    {
        shortName: 'en',
        fullName: 'English',
        emojiFlag: '🇬🇧'
    },
    {
        shortName: 'de',
        fullName: 'German',
        emojiFlag: '🇩🇪'
    },
    {
        shortName: 'es',
        fullName: 'Spanish',
        emojiFlag: '🇪🇸'
    }
];

module.exports = { languages };