-- phpMyAdmin SQL Dump
-- version 4.9.7deb1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jul 02, 2022 at 08:15 PM
-- Server version: 8.0.27-0ubuntu0.21.04.1
-- PHP Version: 7.4.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `yukpilih`
--

-- --------------------------------------------------------

--
-- Table structure for table `choices`
--

CREATE TABLE `choices` (
  `id` bigint UNSIGNED NOT NULL,
  `poll_id` bigint UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2022_07_01_070939_create_poll_table', 1),
(6, '2022_07_01_070940_create_choices_table', 1),
(7, '2022_07_01_070948_create_vote_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `created_at`, `updated_at`) VALUES
(1, 'App\\Models\\User', 1, 'auth_token', '4ce3a3468822d9618ebc7fa847e0380dddbba90b3ffd38ec9397c29e8b5828af', '[\"*\"]', '2022-07-02 06:10:14', '2022-07-02 01:43:00', '2022-07-02 06:10:14'),
(2, 'App\\Models\\User', 1, 'auth_token', '0f1023d2271ebbbccd1e8716e0b60339a32fc71b6ae593c9495eb8ccc5543607', '[\"*\"]', NULL, '2022-07-02 02:38:50', '2022-07-02 02:38:50'),
(3, 'App\\Models\\User', 1, 'auth_token', '79c3622005ac92359c667b3a5237e719346bf4deab6af786fdd749062a8eaa1e', '[\"*\"]', NULL, '2022-07-02 02:42:59', '2022-07-02 02:42:59'),
(4, 'App\\Models\\User', 1, 'auth_token', '4e741b74af18735bca5d5f952de19f791a2de06ffe95abec44a34e37a69bbff9', '[\"*\"]', NULL, '2022-07-02 02:45:22', '2022-07-02 02:45:22'),
(5, 'App\\Models\\User', 1, 'auth_token', '01351302b6f6025fbbfbb9eb985cb426a1dd266a7679719e00ecc8bd08b6662f', '[\"*\"]', NULL, '2022-07-02 02:46:10', '2022-07-02 02:46:10'),
(6, 'App\\Models\\User', 1, 'auth_token', '56f6d84530cbe145698f04d293b0d3186c8dd628de4649407081400694970d13', '[\"*\"]', NULL, '2022-07-02 02:47:19', '2022-07-02 02:47:19'),
(7, 'App\\Models\\User', 1, 'auth_token', '1a632afd1b50285498251b7d023bfa5677936ac516a3de8f09df73efa5aa2fa9', '[\"*\"]', NULL, '2022-07-02 02:47:41', '2022-07-02 02:47:41'),
(8, 'App\\Models\\User', 1, 'auth_token', 'e36b8adb3cb69e8c260e14299218ffe56a4292c64ccfd3e24ab72e4a7c2166e3', '[\"*\"]', NULL, '2022-07-02 02:47:52', '2022-07-02 02:47:52'),
(9, 'App\\Models\\User', 1, 'auth_token', '21f6f75aff9a6a8be2c7b4f1b037fe06713b928fc4ec36cc4093cc091dffe6a1', '[\"*\"]', NULL, '2022-07-02 02:49:00', '2022-07-02 02:49:00'),
(10, 'App\\Models\\User', 1, 'auth_token', '2848c1e0a0ebb6159a72863182596b40354399358f6d8f8aff31562e3eeda56c', '[\"*\"]', NULL, '2022-07-02 02:49:20', '2022-07-02 02:49:20'),
(11, 'App\\Models\\User', 1, 'auth_token', 'a5aae9c74839420d1b4b1dfbf9c3a911e4ba8c6f10afe0458fb66992ac4385e9', '[\"*\"]', NULL, '2022-07-02 02:49:31', '2022-07-02 02:49:31'),
(12, 'App\\Models\\User', 1, 'auth_token', '1673e579873899a17d46d7125d1e1d70444611a978ef24eb7ec3b1ffd9572efd', '[\"*\"]', NULL, '2022-07-02 02:49:31', '2022-07-02 02:49:31'),
(13, 'App\\Models\\User', 1, 'auth_token', '63ba94907cd03fa2efb2ba3a529ff86a062bba784b721b0a3f195e0a3fa234b5', '[\"*\"]', NULL, '2022-07-02 02:49:31', '2022-07-02 02:49:31'),
(14, 'App\\Models\\User', 1, 'auth_token', '1813c5dcae0ce8770a6e734bec85f280521ebafeb00724ac269759dac84fed39', '[\"*\"]', NULL, '2022-07-02 02:49:53', '2022-07-02 02:49:53'),
(15, 'App\\Models\\User', 1, 'auth_token', 'a6bbb4497d0b7512f3209a558ed38d0f4bdc1faeea2519f7c1f7629e4bdfcf5f', '[\"*\"]', NULL, '2022-07-02 02:49:56', '2022-07-02 02:49:56'),
(16, 'App\\Models\\User', 1, 'auth_token', 'b0f222939a1e89024088f6a07d21e1d7a81ffb7a253d82fc8fcef31e6747a34b', '[\"*\"]', NULL, '2022-07-02 02:49:56', '2022-07-02 02:49:56'),
(17, 'App\\Models\\User', 1, 'auth_token', 'ae86aa56299ded3b4d58af1666824f7e3d69e028c9053a47344dc1d829d02314', '[\"*\"]', NULL, '2022-07-02 02:49:56', '2022-07-02 02:49:56'),
(18, 'App\\Models\\User', 1, 'auth_token', '027eaa28af17521b07f4f867ee6e90b185d9b1be72e1f165fd64871883d7cd76', '[\"*\"]', NULL, '2022-07-02 02:49:57', '2022-07-02 02:49:57'),
(19, 'App\\Models\\User', 1, 'auth_token', '06d6be23c5cac2a5899bcc0632a372964fcd7363eb6a52af66042a8dbaa89c09', '[\"*\"]', NULL, '2022-07-02 02:49:57', '2022-07-02 02:49:57'),
(20, 'App\\Models\\User', 1, 'auth_token', '238607a907338b13a6e3b01f3ffc102fcd9abaed245a2660004d83126963e8c2', '[\"*\"]', NULL, '2022-07-02 02:49:57', '2022-07-02 02:49:57'),
(21, 'App\\Models\\User', 1, 'auth_token', 'e9b6f5b5528400575148bb5a9500611f01d4e392c22fee99444f1531bb516fc7', '[\"*\"]', NULL, '2022-07-02 02:50:14', '2022-07-02 02:50:14'),
(22, 'App\\Models\\User', 1, 'auth_token', 'e08a2fabaf2b81814e93fa5e62f1e90a838f00fc84ec939a8634bc5cba3efda2', '[\"*\"]', NULL, '2022-07-02 02:50:28', '2022-07-02 02:50:28'),
(23, 'App\\Models\\User', 1, 'auth_token', '54650e633b49f646a718758d13879b270aa0a5a40efe5017681e9f498987f5b7', '[\"*\"]', NULL, '2022-07-02 02:50:58', '2022-07-02 02:50:58'),
(24, 'App\\Models\\User', 1, 'auth_token', '747a251f75a4dec9ae4f146fc5f9e924a9ded4369978072391593ecf4c46fb63', '[\"*\"]', NULL, '2022-07-02 02:51:59', '2022-07-02 02:51:59'),
(25, 'App\\Models\\User', 1, 'auth_token', '996bfe94efa3f0649a532a374142a0bf81084005b586d287c621eee32d69ccd9', '[\"*\"]', NULL, '2022-07-02 02:56:16', '2022-07-02 02:56:16'),
(26, 'App\\Models\\User', 1, 'auth_token', '471ac5de06cbaba4e167de25a20c8f4ad4466d1ce59848cec3b9c5e8325970fa', '[\"*\"]', NULL, '2022-07-02 02:56:23', '2022-07-02 02:56:23'),
(27, 'App\\Models\\User', 1, 'auth_token', 'a3d4a508be71679a4501043569927c4a0ecf9170a572411d1a0c9885768ed65a', '[\"*\"]', NULL, '2022-07-02 02:56:35', '2022-07-02 02:56:35'),
(28, 'App\\Models\\User', 1, 'auth_token', '746a048f607a32dbd2571c8bf228835a1403942242f8e182050fe598ea67617a', '[\"*\"]', '2022-07-02 05:15:26', '2022-07-02 03:01:20', '2022-07-02 05:15:26'),
(29, 'App\\Models\\User', 1, 'auth_token', '2046766ae792b8a7b2c140749e5220080ff07fe9ac41f6a83eb6d8636a2099e1', '[\"*\"]', NULL, '2022-07-02 05:16:06', '2022-07-02 05:16:06'),
(30, 'App\\Models\\User', 1, 'auth_token', '58d3b7000b5e819464f9f38913548b85ccdd97575c3b4c2c17dad60ab6235f07', '[\"*\"]', '2022-07-02 05:16:32', '2022-07-02 05:16:30', '2022-07-02 05:16:32'),
(31, 'App\\Models\\User', 1, 'auth_token', 'b01dc2063219c848bb17d83dade84c47fd2dd36220ce9cb6727b3e801429ea71', '[\"*\"]', '2022-07-02 05:18:22', '2022-07-02 05:17:34', '2022-07-02 05:18:22'),
(32, 'App\\Models\\User', 1, 'auth_token', '718d4e832d94d89420244abf326871a199370998a811701e850187bf1f046084', '[\"*\"]', '2022-07-02 05:18:45', '2022-07-02 05:18:34', '2022-07-02 05:18:45'),
(33, 'App\\Models\\User', 1, 'auth_token', '2964785f967cf5eb9c5846732fe3f517a0132e690f78ef4d6950d515b2b82aa6', '[\"*\"]', '2022-07-02 05:19:37', '2022-07-02 05:19:32', '2022-07-02 05:19:37'),
(34, 'App\\Models\\User', 1, 'auth_token', 'ed86deb00a1713c78911b80aaa9de9cce96db5909f1aac5e97d8a61ffd40a97f', '[\"*\"]', '2022-07-02 05:20:38', '2022-07-02 05:20:33', '2022-07-02 05:20:38'),
(35, 'App\\Models\\User', 1, 'auth_token', '60b1d540b2b82b8ccaa5634cd50fd680e2d6ce2f34c73237fddec01ad03fff66', '[\"*\"]', '2022-07-02 05:21:25', '2022-07-02 05:21:22', '2022-07-02 05:21:25'),
(36, 'App\\Models\\User', 1, 'auth_token', '3531ecebbc5391a9444fca1f62e6ec84606bed0673ff650ab8ffeb0fc60d3811', '[\"*\"]', '2022-07-02 05:21:54', '2022-07-02 05:21:52', '2022-07-02 05:21:54'),
(37, 'App\\Models\\User', 1, 'auth_token', 'fd5e531e0b2f6b7ecc6766344c3351d7919ed2d447a21e385b2c3c2c070d7c0e', '[\"*\"]', '2022-07-02 05:26:29', '2022-07-02 05:25:10', '2022-07-02 05:26:29'),
(38, 'App\\Models\\User', 1, 'auth_token', '3f2b495fd5f2b59b0982c949416c2cd1ecd907a1f7ab21a601020125fdb00c3a', '[\"*\"]', '2022-07-02 05:44:38', '2022-07-02 05:43:16', '2022-07-02 05:44:38'),
(39, 'App\\Models\\User', 2, 'auth_token', '4c1e994684454d74d7dd64f9e8a82011da51cd8093826cd6e426b55e75a0a00f', '[\"*\"]', NULL, '2022-07-02 06:00:39', '2022-07-02 06:00:39'),
(40, 'App\\Models\\User', 3, 'auth_token', 'a47945f498d39c2a75047ff83e361559db3a8fd49177f5bf33915041bc5ceb52', '[\"*\"]', NULL, '2022-07-02 06:02:13', '2022-07-02 06:02:13'),
(41, 'App\\Models\\User', 4, 'auth_token', '4bedc0d1f3af9200546280466ac8aaa69e158a3602be10bdf9e30654b6faff94', '[\"*\"]', NULL, '2022-07-02 06:02:32', '2022-07-02 06:02:32'),
(42, 'App\\Models\\User', 1, 'auth_token', '23ba3d64c98e29a1bbc3041dad79521cb555ef322a1975b3107e4ade8e3be8fe', '[\"*\"]', '2022-07-02 06:03:58', '2022-07-02 06:03:21', '2022-07-02 06:03:58');

-- --------------------------------------------------------

--
-- Table structure for table `poll`
--

CREATE TABLE `poll` (
  `id` bigint UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `deadline` datetime NOT NULL,
  `choices` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `poll`
--

INSERT INTO `poll` (`id`, `title`, `description`, `deadline`, `choices`, `created_at`, `updated_at`) VALUES
(1, 'Pemilihan Surga Atau Neraka', 'pemilihan surga atau neraka', '2022-07-02 21:17:32', '{\"1\":\"Surga\",\"2\":\"Neraka\"}', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Admin', 'admin@email.test', NULL, '$2y$10$ZXT9Yr7Tw2aRh.fE.CceROZMTCpJ.lHY1tLKybQPs3UNOGsmaT/mG', NULL, '2022-07-02 01:43:00', '2022-07-02 01:43:00'),
(2, 'Adria Carney', 'jeliby@mailinator.com', NULL, '$2y$10$qk9le63daqWMk9Cti927cOVFDyMag7LRv9kzqcDEAiMH32ft0fHG6', NULL, '2022-07-02 06:00:39', '2022-07-02 06:00:39'),
(3, 'Zoe Sawyer', 'cojevox@mailinator.com', NULL, '$2y$10$Tqbu7J31J3a0vSvIalzCNeiOwEj.TeXeGnIOFu0sTim.fn6q9IPoK', NULL, '2022-07-02 06:02:13', '2022-07-02 06:02:13'),
(4, 'George Branch', 'hitipal@mailinator.com', NULL, '$2y$10$RXfv1FwI0EDlTwPYnM7hS.1UEiux/EKqp8y65ItWQcdE.hV8kdzsa', NULL, '2022-07-02 06:02:32', '2022-07-02 06:02:32');

-- --------------------------------------------------------

--
-- Table structure for table `vote`
--

CREATE TABLE `vote` (
  `id` bigint UNSIGNED NOT NULL,
  `poll_id` bigint UNSIGNED NOT NULL,
  `choices_id` int NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `vote`
--

INSERT INTO `vote` (`id`, `poll_id`, `choices_id`, `created_at`, `updated_at`) VALUES
(2, 1, 1, NULL, NULL),
(3, 1, 1, NULL, NULL),
(4, 1, 2, NULL, NULL),
(5, 1, 1, NULL, NULL),
(6, 1, 1, NULL, NULL),
(7, 1, 1, NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `choices`
--
ALTER TABLE `choices`
  ADD PRIMARY KEY (`id`),
  ADD KEY `choices_poll_id_foreign` (`poll_id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `poll`
--
ALTER TABLE `poll`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Indexes for table `vote`
--
ALTER TABLE `vote`
  ADD PRIMARY KEY (`id`),
  ADD KEY `vote_poll_id_foreign` (`poll_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `choices`
--
ALTER TABLE `choices`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT for table `poll`
--
ALTER TABLE `poll`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `vote`
--
ALTER TABLE `vote`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `choices`
--
ALTER TABLE `choices`
  ADD CONSTRAINT `choices_poll_id_foreign` FOREIGN KEY (`poll_id`) REFERENCES `poll` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `vote`
--
ALTER TABLE `vote`
  ADD CONSTRAINT `vote_poll_id_foreign` FOREIGN KEY (`poll_id`) REFERENCES `poll` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
