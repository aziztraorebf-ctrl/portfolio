---
title: "ArbitrageVault BookFinder"
description: "AI-powered Amazon book sourcing platform built over 13 development phases"
---

# ArbitrageVault BookFinder

ArbitrageVault BookFinder is a comprehensive platform designed for Amazon book arbitrage sellers. It automates the process of finding profitable books by analyzing pricing data, sales rankings, and competition metrics.

## The Problem

Manual book sourcing is time-consuming and error-prone. Sellers spend hours scanning ISBNs, checking prices, and calculating potential ROI - often missing profitable opportunities or purchasing unprofitable inventory.

## The Solution

ArbitrageVault automates this entire workflow:

1. **Automated Discovery**: Scans Amazon categories to find potential opportunities
2. **Real-Time Pricing**: Integrates with Keepa API for accurate price and BSR data
3. **Intelligent Scoring**: Calculates ROI, velocity, and risk scores
4. **Decision Support**: Provides buy/skip recommendations with confidence levels

## Architecture

The system uses a modern microservices-inspired architecture:

- **Frontend**: React + TypeScript SPA with responsive design
- **Backend**: FastAPI with async endpoints and comprehensive validation
- **Database**: PostgreSQL on Neon with connection pooling
- **Authentication**: Firebase Auth with token verification
- **Deployment**: Backend on Render, Frontend on Netlify

## Key Features

### AutoSourcing
Automated product discovery with customizable filters for category, price range, BSR, and ROI targets.

### Niche Discovery
Find profitable categories with competition analysis and trend detection.

### Analytics Dashboard
Real-time metrics, historical trends, and performance tracking.

### Saved Searches
Keep track of searches with 30-day retention and quick re-run capability.

## Development Journey

This project was built over 13 distinct phases, each adding new capabilities while maintaining production stability. The development followed a strict "Zero-Tolerance Engineering" methodology with mandatory testing, code review, and verification gates.

See the interactive timeline below for detailed phase information.
