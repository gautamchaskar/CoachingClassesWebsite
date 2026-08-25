# Repository Rules for CoachingClassesWebsite

## Feature Preservation Mandate
Before adding new features, modifying code in `index.html`, `style.css`, or `app.js`, or refactoring existing modules:
1. **Read `FEATURES.md`**: You MUST read `FEATURES.md` in the project root to understand all existing functionality contracts.
2. **Never Remove Existing Capabilities**: Ensure Student Portal Authentication, Live Batch Filters, Q&A Doubt Thread, Fee Calculator, and Floating Actions remain 100% functional.
3. **Persist State Schema**: Maintain the structure of `studentSession` in `localStorage`.
4. **Update `FEATURES.md`**: Whenever a new feature or endpoint is added to the project, update `FEATURES.md` accordingly.
