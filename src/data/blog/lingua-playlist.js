const post = {
  id: 'lingua-playlist',
  title: 'Lingua Playlist: Learning From the Sentences I Actually Use',
  date: '2026-09-29',
  excerpt: 'Repeated podcast listening helped me learn. I built Lingua Playlist to bring that same habit to my own sentences, turning notes and screenshots into audio playlists for commuting and running.',
  socialImage: `${process.env.PUBLIC_URL}/images/blog/lingua-playlist/hero-editorial-v2.png`,
  tags: ['iOS', 'language learning', 'indie development'],
  content: `
Some of the most useful language practice I have done has been listening to the same podcast episodes over and over again. Coming back to familiar material gave me another chance to catch a phrase, follow a sentence, or notice something I had missed before.

I wanted to do that with sentences from my own life. Things I wanted to say, phrases I had come across, and expressions I knew would be useful again. I also wanted to spend less time looking at a screen. My commute and my runs already gave me time to listen; I wanted a simple way to bring my own learning material along.

That is why I built **Lingua Playlist**.

## What Is Lingua Playlist?

Lingua Playlist is a native iOS language-learning app built around playlists of sentences. You collect the phrases you want to practise, organise them into playlists, and listen to them. You can also record your pronunciation, get feedback, and review sentences with spaced repetition flashcards.

The playlist is the starting point. It might contain things you need at work, questions for an upcoming trip, or a handful of sentences you keep wanting to use in conversation. You choose the material, and the app gives you ways to return to it.

## Why I Wanted My Own Sentences

Podcasts gave me a reason to keep listening, and repeating the same episodes became part of how I learned. But sometimes I wanted to focus on a much smaller set of phrases. I wanted to hear those particular sentences again without searching through a longer recording.

There was also a gap between collecting something and practising it. Writing a sentence in a note or saving it in a chat is easy. Making it part of a listening routine takes another step. I wanted to make that step small enough that I would actually do it.

The idea was to give those saved sentences somewhere useful to go. Once they were in a playlist, I could revisit them throughout the day with my phone in my pocket.

## From a Screenshot to My Next Run

My own routine is straightforward. I find sentences I want to learn and write them down in a note or in a chat. Then I take a screenshot, or a photo if the text is somewhere else, and scan it into the app.

Lingua Playlist recognises the text and lets me review the sentences before importing them. I can correct the wording, choose how to use the scanned text, and fill in missing translations or meanings. Then I add the sentences to a playlist and they are ready to practise.

That small workflow is the part I use to turn something I have just collected into something I can listen to later. I do the setup before heading out, start a playlist, and use my commuting or running time to revisit it.

The player lets me adjust the speed, repetition, pauses, and playback order. Background audio and lock screen controls mean I can keep listening without leaving the app open on the screen.

![Handwritten notes becoming captured sentence cards and a Lingua Playlist on a phone](/images/blog/lingua-playlist/notes-to-playlist-v1.png)

## Listening, Speaking, and Remembering

Listening is the centre of the app, but there are times when I want to work with a sentence more actively. Lingua Playlist lets learners record themselves and get pronunciation feedback. It also includes flashcard review, where they can rate how well they remembered a sentence and return to it through spaced repetition.

AI sentence suggestions offer another way to build a playlist. If someone has a topic or word they want to practise but needs examples, they can generate suggestions and choose what to add.

These features support different moments in a day. A commute can be a listening session. A few quiet minutes can be a chance to practise saying a difficult phrase or test whether its meaning comes back without a prompt. The same sentences stay available across those activities.

## How I Built It

I built the iOS app in **Swift and SwiftUI**, with **SwiftData** for local persistence. The code separates the screens, their state, and services such as translation and audio, so those responsibilities can be worked on independently.

Audio is a central part of the product. AVFoundation supports playback and recording, while the app integrates with the system for background listening and playback controls. For scanning, Apple's Vision framework recognises text from images. That recognised text can then be reviewed and turned into sentences in the app.

The project also uses Supabase for backend services, Azure Speech for generated speech and pronunciation assessment, and OpenAI services for language features such as translation and sentence suggestions. Connecting these pieces was one of the more challenging parts of building it.

## The Challenge of AI Features and API Usage

Getting an AI feature to return a useful result is one part of the work. Making it practical to run inside an app brings more decisions: when to make a request, what to save, how to track usage, and what should happen when a limit is reached.

This matters especially in an app built around repetition. If someone listens to the same sentence many times, generating fresh audio for every replay would create unnecessary work and cost. Lingua Playlist caches generated speech so existing audio can be reused. Translation results are cached too.

I also implemented usage tracking for individual features, trial limits, and daily fair-use checks to help control excessive API usage. Translation, speech generation, pronunciation assessment, and sentence suggestions have different usage patterns, so I needed to account for them separately.

Working through this made API usage a product decision as well as a technical one. The app needs to explain when a feature is unavailable, and the implementation needs to avoid repeating paid work that has already been done. Building the AI services and controlling their usage took more thought than simply connecting an endpoint to a button.

## Who I Built It For

![A commuter beside a train window and a runner on a park path listening through earbuds, connected by a flowing audio line](/images/blog/lingua-playlist/commuting-and-running-v1.png)

I built Lingua Playlist for people who want to practise language that is relevant to their own lives and have time to listen during the day. That could mean a commuter collecting everyday phrases, a runner returning to familiar sentences, or a learner turning notes from a lesson into their next playlist.

For me, its value is that the material I collect becomes easier to use. A sentence saved in a chat can become part of tomorrow's commute. A phrase I want to remember can come along on my next run. That is the routine I wanted when I started building it.

Lingua Playlist is available on iOS, and **the Android version is currently in development**.

[Download Lingua Playlist on the App Store](https://apps.apple.com/hu/app/lingua-playlist/id6777853979)

Start with a few sentences you actually want to use. Put them in a playlist, listen when it fits your day, and let me know how you use it. I would love to hear which parts help and what would make your own routine easier.
  `,
}

export default post
