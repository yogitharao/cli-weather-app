# GitHub Setup and Pull Request Guide

This document guides you through setting up the GitHub repository and creating a Pull Request for the CLI Weather App project.

## Prerequisites

- GitHub account (create at https://github.com if you don't have one)
- Git installed locally
- The CLI Weather App code (already committed to `feature/initial-weather-app` branch)

## Step-by-Step Instructions

### Step 1: Create a New Repository on GitHub

1. Go to https://github.com/new
2. Fill in the repository details:
   - **Repository name**: `cli-weather-app`
   - **Description**: `A command-line weather application that fetches and displays current weather conditions for any city`
   - **Public**: Yes (as required)
   - **Initialize this repository with**:
     - ❌ Do NOT add README, .gitignore, or license (we already have them)
3. Click "Create repository"

### Step 2: Connect Local Repository to GitHub

After creating the repository, you'll see setup instructions. Run these commands:

```powershell
# Set the remote origin URL
cd c:\Users\Yogitharao\cli-weather-app
git remote add origin https://github.com/YOUR_USERNAME/cli-weather-app.git

# Verify the remote
git remote -v
```

Replace `YOUR_USERNAME` with your actual GitHub username.

### Step 3: Push the Feature Branch to GitHub

```powershell
# Push the feature branch to GitHub
git push -u origin feature/initial-weather-app
```

This will:

- Create the feature branch on GitHub
- Set up tracking so future pushes are easier
- Display the URL to create a Pull Request

### Step 4: Push the Main Branch

```powershell
# Push main branch to GitHub (optional but recommended)
git push -u origin main
```

### Step 5: Create a Pull Request on GitHub

**Option A: Using GitHub Web Interface (Recommended)**

1. Go to your repository: `https://github.com/YOUR_USERNAME/cli-weather-app`
2. You should see a banner suggesting to "Create a pull request"
3. Click "Compare & pull request" or navigate to the "Pull requests" tab
4. Fill in the PR details:

**Title**:

```
feat: Add complete CLI weather application with Open-Meteo API
```

**Description**:

```markdown
## Summary

This Pull Request introduces the complete CLI Weather App implementation with Open-Meteo API integration.

## Changes

- ✓ Implemented main weather fetching functionality (index.js)
- ✓ Used axios for HTTP requests to Open-Meteo API
- ✓ Added geocoding support for global city resolution
- ✓ Implemented comprehensive error handling
- ✓ Created professional README with usage documentation
- ✓ Added .gitignore configuration
- ✓ Updated package.json with proper metadata

## Features

- Fetches real-time weather without API key requirement
- Supports any city worldwide
- Displays temperature, weather condition, and wind speed
- Graceful error handling for invalid cities and network issues
- Beautiful ASCII formatted output

## Testing

Tested with multiple cities:

- ✓ London, UK (5.8°C, Partly cloudy)
- ✓ Tokyo, Japan (7.9°C, Clear sky)
- ✓ New York, USA (-11.8°C, Clear sky)

Error scenarios verified:

- ✓ Invalid city name handling
- ✓ Missing argument handling
- ✓ Network error handling

## Checklist

- [x] Code follows project style guidelines
- [x] All tests pass
- [x] Documentation is complete
- [x] README is updated
- [x] Error handling is comprehensive
- [x] Code is properly committed with descriptive messages

## How to Test

1. Clone the repository
2. Run `npm install`
3. Test with: `node index.js "London"`
4. Expected output: Formatted weather information for London
```

5. Select:
   - **Base branch**: `main`
   - **Compare branch**: `feature/initial-weather-app`

6. Click "Create pull request"

**Option B: Using GitHub CLI (if installed)**

```powershell
# Create PR via command line
gh pr create --title "feat: Add complete CLI weather application with Open-Meteo API" `
             --body "Implements weather fetching application with Open-Meteo API, comprehensive error handling, and formatted CLI output"
```

### Step 6: Verify Your Pull Request

1. Go to your repository
2. Navigate to "Pull requests" tab
3. You should see your PR with the title and description
4. Check that:
   - All files are included (index.js, package.json, README.md, .gitignore)
   - Commits are properly displayed
   - No conflicts with main branch

### Important Notes

**About Merging**:

- For this project, you can merge the PR yourself (since it's your repository)
- In professional environments, merging requires code review approval
- To merge: Click "Merge pull request" → "Confirm merge"

**Branch Protection** (Optional):

- To prevent accidental commits to main, you can enable branch protection:
  1. Go to Settings → Branches
  2. Add rule for `main`
  3. Require pull request reviews before merging
  4. Require status checks to pass before merging

## PR Verification Checklist

After creating the PR, verify:

- [ ] PR title is descriptive
- [ ] PR description includes all changes
- [ ] Base branch is `main`
- [ ] Compare branch is `feature/initial-weather-app`
- [ ] All commits are visible in the PR
- [ ] File changes are correct (index.js, package.json, README.md, .gitignore)
- [ ] No merge conflicts
- [ ] PR is marked as "Open"

## Getting the PR URL

Once your PR is created, the URL will be:

```
https://github.com/YOUR_USERNAME/cli-weather-app/pull/1
```

This is the URL you'll submit as part of your final submission.

## Troubleshooting

**Problem**: "fatal: remote origin already exists"

```powershell
# Solution: Remove and re-add the remote
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/cli-weather-app.git
```

**Problem**: "Permission denied (publickey)"

```powershell
# Solution: Set up SSH keys or use HTTPS with personal access token
# For HTTPS with token:
git clone https://YOUR_USERNAME:YOUR_TOKEN@github.com/YOUR_USERNAME/cli-weather-app.git
```

**Problem**: Commits not showing in PR

```powershell
# Ensure feature branch is pushed
git push -u origin feature/initial-weather-app

# Verify branch exists on GitHub
git branch -a
```

## Next Steps

1. ✅ Create GitHub repository
2. ✅ Push code to GitHub
3. ✅ Create and open Pull Request
4. 📹 Record video demonstration (see DEMO_GUIDE.md)
5. 📋 Submit PR URL and video link

## References

- [GitHub Creating a Pull Request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)
- [GitHub Push to Remote](https://docs.github.com/en/get-started/using-git/pushing-commits-to-a-remote-repository)
- [Git Remote Configuration](https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes)
