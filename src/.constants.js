module.exports = Object.freeze({
  TOKEN: '960042672:AAHZqXpZqzq7KVs2xV-2F-RBBZ0u3Sv8v90',
  ARIA_SECRET: 'hEdHJv%}H%g1ZcCz+jKnA#GyrGU6rm',
  ARIA_DOWNLOAD_LOCATION: '/home/user/path/to/download/dir (no trailing "/")',
  ARIA_DOWNLOAD_LOCATION_ROOT: '/', //The mountpoint that contains ARIA_DOWNLOAD_LOCATION
  ARIA_FILTERED_DOMAINS: ['yts', 'YTS', 'cruzing.xyz', 'eztv.ag', 'YIFY'], // Prevent downloading from URLs containing these substrings
  ARIA_FILTERED_FILENAMES: ['YIFY'], // Files/top level directories with these substrings in the filename won't be downloaded
  ARIA_PORT: 8210, // Port for aria2c RPC server, if you change this here, make sure to update aria.sh as well
  INDEX_DOMAIN: 'https://one.driveindex.ga/', // Supporting Sharable Links
  GDRIVE_PARENT_DIR_ID: '1DAoSAhx5ZM3msuAA72m2w6dSLcRKHgIP',
  SUDO_USERS: [672644971],	// Telegram user IDs. These users can use the bot in any chat.
  AUTHORIZED_CHATS: [-1001449927664],	// Telegram chat IDs. Anyone in these chats can use the bot.
  STATUS_UPDATE_INTERVAL_MS: 12000, // A smaller number will update faster, but might cause rate limiting
  DRIVE_FILE_PRIVATE: {
    ENABLED: false,
    EMAILS: ['someMail@gmail.com', 'someOtherMail@gmail.com']
  },
  DOWNLOAD_NOTIFY_TARGET: {  // Information about the web service to notify on download completion.
    enabled: false,   // Set this to true to use the notify functionality
    host: 'hostname.domain',
    port: 80,
    path: '/botNotify'
  },
  COMMANDS_USE_BOT_NAME: {
    ENABLED: true,  // If true, all commands except '/list' has to have the bot username after the command
    NAME: "abtorrent_bot"
  },
  IS_TEAM_DRIVE: false
});
