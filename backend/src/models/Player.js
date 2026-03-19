import mongoose from "mongoose";

const PlayerSchema = new mongoose.Schema({
  puuid: {
    type: String,
    required: true,
    unique: true
  },
  region: {
    type: String,
    required: true
  },
  account_level: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  tag: {
    type: String,
    required: true
  },
  platforms: {
    type: String,
    required: true
  },
  peak: {
    season: {
      id: {
        type: String,
        required: true
      },
      short: {
        type: String,
        required: true
      }
    },
    ranking_schema: {
      type: String
    },
    tier: {
      id: {
        type: Number,
        required: true
      },
      name: {
        type: String,
        required: true
      }
    },
    rr: {
      type: Number,
    }
  },
  current: {
    tier: {
      id: {
        type: Number,
        required: true
      },
      name: {
        type: String,
        required: true
      }
    },
    rr: {
      type: Number
    },
    last_change: {
      type: Number
    },
    elo: {
      type: Number
    },
    games_needed_for_rating: {
      type: Number
    },
    rank_protection_shields: {
      type: Number
    },
    leaderboard_placement: {
      type: Number
    }
  }
})

const Player = mongoose.model('Player',  PlayerSchema)
export default Player