---
title: "Anaïs Mattle — Professional profile"
description: "Professional profile of Anaïs Mattle — self-taught developer training for a BTS SIO SLAM degree, looking for an apprenticeship in the Lille area."
eyebrow: "Professional profile"
heading: "Anaïs Mattle"
firstName: "ANAÏS"
lastName: "MATTLE"
intro: "Self-taught developer training for a BTS SIO SLAM degree (apprenticeship track), currently looking for an employer in the Lille area."
quote: "“Every project started with a real need — never with the wish to learn a tool for its own sake.”"
cvHref: "/assets/cv.pdf"

photo: "./photo.webp"

skillsIntro: "Each icon above represents a tool I've actually used in one of my projects — click it to see which one. This isn't a skill-level scale, just a reflection of hands-on, self-taught experience built up project by project."

skills:
  - title: "Python"
    icon: "python"
    description: "Discord bots: asynchronous functions, object-oriented programming basics."
  - title: "SQL"
    icon: "sql"
    description: "Writing SQL queries: creating tables, reading and writing data (SQLite and PostgreSQL)."
  - title: "Web"
    icon: "webdev"
    description: "Designing the site's structure, look and user experience: bilingual navigation, light/dark themes, carousel, accordion, responsive layout."
  - title: "Hosting"
    icon: "hosting"
    description: "Deploying the site via FTP, domain name management."
  - title: "Astro"
    icon: "astro"
    description: "Component separation, translated routing, bilingual editorial content (markdown) kept separate from code."
  - title: "Apps Script"
    icon: "googleappsscript"
    description: "Google Sheets automation scripts, sending data via webhook."
  - title: "Discord"
    icon: "discord"
    description: "Managing channels, roles, permissions, webhooks and bots."
  - title: "Linux"
    icon: "linux"
    description: "Command-line system administration, custom ISO built with Cubic, setting up systemd services."
  - title: "Oracle Cloud"
    icon: "oraclecloud"
    description: "Creating and managing virtual servers (Always Free VMs), backups, SSH access."
  - title: "Tailscale"
    icon: "tailscale"
    description: "Private network for file sharing and SSH connections to my VMs and between my personal devices."

alternanceProject: "I am looking for a company to host me for a BTS SIO apprenticeship starting September 2026, in the Lille area. I have been accepted by both schools below, which offer different rhythms: the company is free to choose whichever suits them best."

formation:
  - name: "My Digital School — Lille"
    schedule: "3 days in company / 2 days at school"
    links:
      - label: "School website"
        href: "https://www.mydigitalschool.com/ecole-multimedia-lille"
      - label: "View apprenticeship schedule"
        href: "/assets/planning-mds.pdf"
  - name: "Lycée Gaston Berger — Lille"
    schedule: "1 week in company / 1 week at school"
    links:
      - label: "School website"
        href: "https://www.gastonberger.fr/"
      - label: "View apprenticeship schedule"
        href: "/assets/planning-gb.pdf"

accordion:
  - question: "Why tech — and why now?"
    answer: "My first project dates back to 2018: for ONES, a team singing competition with 200 participants on Smule, I built a Discord bot in Python with an SQL database to track each player's points and inventory live. The goal was for the text-based role-play mechanics to run 24/7 without needing a game master constantly present. From there, each new need led me to learn another skill: a moderation bot for a community server, Google Sheets automations to manage a guild alliance, then web development to build my application pages and personal site."
  - question: "How I work"
    answer: "While adding a feature to my first bot, an error in an SQL query corrupted the guild inventories in the middle of the night, during a test session with my team. I had to fix it urgently and restore the database before the members woke up. Since then, I have always kept my production and test environments separate."
  - question: "How I apply"
    answer: "I replaced my classic cover letters with web application pages, each carrying my visual identity with an introduction tailored to the company: SNCF, Décathlon, Chronodrive, Gabby, DYB - Pain de Minuit."

carouselSize: "large"
carouselOrientation: "portrait"
carouselImageRatio: "16/9"
carousel:
  - title: "Nola-ONES"
    image: "./Capture-ones.webp"
    description: |
      Discord bot and SQL database built in 2018 for ONES, a team singing competition with 200 participants over 3 months.

      Each player had an inventory — chocolate, darts, cards, gold — spent to heal or trigger random attacks and actions.

      The entire text-based role-play system had to run 24/7 without needing a game master constantly present.
  - title: "Oréo"
    image: "./Capture-sky.webp"
    description: |
      Moderation and animation bot built in 2020 for Sky: Children of the Light, a community server active for over 6 years.  
      Oréo, still in service today, lets moderators isolate a member — removing roles, moving them to a private room, until manual release — without granting them critical permissions such as banning or kicking, along with several contests and mini-games (raffles, lottery) and scheduled automatic cleanup of certain channels each morning.
  - title: "French Garden alliance"
    image: "./Capture-FG.webp"
    description: |
      Google Sheets tool built as captain of a 6-guild Guardian Tales alliance, to distribute members more fairly across raid objectives and optimize competitive scores.

      It automatically calculated each player's potential — previously worked out by hand — to place them correctly. Attendance and progress tracking, with rankings sent automatically to Discord.

      Result: our flagship guild climbed into the European top 10.
  - title: "VMs & infrastructure"
    image: "./Capture-vm.webp"
    description: |
      Self-hosted infrastructure on two Oracle Cloud VMs (Always Free), one per environment — production and test — kept strictly separate.  

      Command-line and graphical administration, secure remote access via Tailscale. Backups via Oracle and rclone.  

      A Cloudflared tunnel will soon connect this infrastructure to the website.
  - title: "Gabby"
    image: "./Capture-gabby.webp"
    description: |
      Application page (in French) built for Gabby, which develops software for the real estate sector.

      Intro animation: a door and a real estate sign set the scene, the door opens on click to reveal the page.
    href: "https://evalexa.fr/candidature-gabby/"
  - title: "DYB - Pain de Minuit"
    image: "./Capture-dyb.webp"
    description: |
      Application page (in French) for DYB - Pain de Minuit, which brews beer from unsold stale bread.

      The intro animation echoes this: a bottle cap pops off on click, bubbles rise, then the page appears.
    href: "https://evalexa.fr/candidature-DYB/"
  - title: "SNCF"
    image: "./Capture-sncf.webp"
    description: |
      Application page (in French) for SNCF.

      The intro animation places the visitor inside a train, with a landscape scrolling past the window; a blind lowers on click to reveal the page.
    href: "https://evalexa.fr/candidature-SNCF/"
  - title: "Décathlon"
    image: "./Capture-decathlon.webp"
    description: |
      Application page (in French) for Décathlon.

      The intro animation shows an open sports bag, with my skills and roles tucked inside like cards; a click gives access to the page.
    href: "https://evalexa.fr/candidature-decathlon/"
  - title: "Chronodrive"
    image: "./Capture-chronodrive.webp"
    description: |
      Application page (in French) for Chronodrive.

      The intro animation floats a grocery basket containing my skills and roles; a click gives access to the page.
    href: "https://evalexa.fr/candidature-chronodrive/"
  - title: "Evalexa"
    image: "../../../assets/images/logo/logo-full-watercolor.webp"
    description: |
      My personal, bilingual (FR/EN) website, built in HTML/CSS/JS with Astro to manage multilingual editorial content without building my own build tool.

      It currently only contains this professional profile and my application pages, but will eventually host:
      - my watercolor gallery
      - my technical experiments
      - various educational resources
  - title: "Artistic creation"
    image: "./aquarelle.webp"
    description: |
      Watercolor is one of my creative projects.
      I explore landscapes, atmospheres and light, through an entirely self-taught practice.

      This curiosity for visual creation naturally extended into digital drawing, notably with the design of the Evalexa logo, and continues to influence how I approach the visual identity of my projects.

contact:
  name: "Anaïs Mattle"
  items:
    - icon: "✉"
      label: "a.mattle@outlook.com"
    - icon: "☎"
      label: "06 09 56 29 33"
    - icon: "📍"
      label: "62500 Saint-Omer, France"
    - icon: "🚆"
      label: "Lille / Calais rail line"
    - icon: "🚗"
      label: "Driving licence — personal vehicle"
    - icon: "💻"
      label: "Remote possible"
---

This page is meant to be shared directly (CV, applications).
