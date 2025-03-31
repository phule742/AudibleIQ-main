// A class to hold all the widgets that are displayed on the home screen,
// abstracted for convenience of adding activities
class WidgetManager {
    static getTestWidgets() {
        return [
            { name: "Audio Delay Test", color: "#FFFFFF", icon: "fa-solid fa-ear-listen", description: "Play an audio delay test.", link: "./view/pages/audio_delay.html", datalink: "" },
            { name: "Perfect Pitch Test", color: "#FFFFFF", icon: "fa-solid fa-music", description: "Test your pitch perception.", link: "./view/pages/PerfectPitchActivity/landing.html", datalink: "" },
            { name: "Left Right Audio Test", color: "#FFFFFF", icon: "fa-solid fa-arrows-left-right", description: "Test which ear audio comes from.", link: "./view/pages/ActivityLeftRightKeysTemplate.html", datalink: "" },
            { name: "Multiple Choice Test", color: "#FFFFFF", icon: "fa-solid fa-list", description: "Test yourself in a multiple choice format.", link: "./view/pages/ActivityMultipleChoiceTemplate.html", datalink: "./view/pages/ActivityMultipleChoiceData.html" },
            { name: "Auditory Reaction Time", color: "#FFFFFF", icon: "fa-solid fa-feather", description: "Test your auditory reaction time.", link: "./view/pages/AuditoryReactionTimeActivity/AuditoryReactionTimeLanding.html", datalink: "./view/pages/AuditoryReactionTimeActivity/AuditoryReactionTimeData.html" },
            { name: "Suggestion Page", color: "#FFFFFF", icon: "fa-solid fa-pen", description: "Tell us any suggestions for activities or improvements on the web.", link: "./view/pages/ActivityWrittenResponseTemplate.html", datalink: "./view/pages/ActivityWrittenResponseData.html" },
            { name: "Chord Isolation Practice", color: "#FFFFFF", icon: "fa-solid fa-music", description: "Practice your triad isolation skills.", link: "./view/pages/ChordIsolationActivity/ChordIsolationActivityLanding.html", datalink: "./view/pages/ChordIsolationActivity/ChordIsolationActivityData.html" },
            //
        ];
    }
}

// Export the class if using ES Modules
export default WidgetManager;
