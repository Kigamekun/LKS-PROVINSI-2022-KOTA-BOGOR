<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress_table' );

/** Database username */
define( 'DB_USER', 'django' );

/** Database password */
define( 'DB_PASSWORD', 'ReksaSyahputra1012!' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'F~uN>(E RYL}Z6DT*:|iy;?,>#0oryWaAz$E99msmrppJs9$z<d2`ec:4U%)t7!O' );
define( 'SECURE_AUTH_KEY',  'lY;Y7w1df/:Fuu;~(V_JrX.&)co%XIgqULJNRVMINyF58{<wzpxdCHzke-|3|Igo' );
define( 'LOGGED_IN_KEY',    '}@*RB 86L5VWo81Mo9p.UQ!g!KLC$N]RyOFX2;A3$V^t+~6;G6f^nupNuxO8Z!0a' );
define( 'NONCE_KEY',        'c!Y3&$EbN&@ ^Ba&w/y6^j(G<%umOAv8dNPVE.)Z,HGLWGZ/i5o, ,cy[L<|oq1e' );
define( 'AUTH_SALT',        '-/D6)3FY[lg0Retv_M@:<Lh,h/lIqa `Rsy?iw/0Jv5v5;^%4y9GLk,KbmCd.5iD' );
define( 'SECURE_AUTH_SALT', '=Wb/Tl7Fw}pi]12M5+7P,N hiI^/1_GV>L}EH@tw.IRpk&hVHUp D0fOtUQ-v:<|' );
define( 'LOGGED_IN_SALT',   'M;W#NG]YD8_W b<x~!sssF]vLy.7}U%<ivZ?v}z8HRqcuXPVeH|Hugl;|8xw2w)/' );
define( 'NONCE_SALT',       'E ,+_0?cEz(QU^3E9ItX/q-s699oUn/sg*``.0wIoq+IS<K?zN7=}1{ce*p3.1n@' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
