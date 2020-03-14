-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Mar 14, 2020 at 06:58 AM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `a1abilities`
--

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `id` int(11) NOT NULL,
  `email` varchar(200) DEFAULT NULL,
  `address` varchar(500) DEFAULT NULL,
  `mobile` varchar(20) DEFAULT NULL,
  `is_active` tinyint(1) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `contact`
--

INSERT INTO `contact` (`id`, `email`, `address`, `mobile`, `is_active`, `created_at`) VALUES
(1, ' a1abilites@gmail.com', '  53 Inglewood Dr,Burnside heights ,VIC 3023 Australia', '+61 0410-317-778', 0, '2020-03-02 12:34:12');

-- --------------------------------------------------------

--
-- Table structure for table `images`
--

CREATE TABLE `images` (
  `id` int(11) NOT NULL,
  `image_name` varchar(255) DEFAULT NULL,
  `is_active` tinyint(1) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `images`
--

INSERT INTO `images` (`id`, `image_name`, `is_active`, `created_at`) VALUES
(1, 'do.png', 1, '2020-03-13 05:59:34'),
(2, 'do.png', 1, '2020-03-13 05:59:34'),
(3, 'do.png', 1, '2020-03-13 05:59:34'),
(4, 'do.png', 1, '2020-03-13 05:59:34'),
(5, 'do.png', 1, '2020-03-13 05:59:34'),
(6, 'do.png', 1, '2020-03-13 05:59:34'),
(7, 'do.png', 1, '2020-03-13 05:59:34'),
(8, 'do.png', 1, '2020-03-13 05:59:34'),
(9, 'do.png', 1, '2020-03-13 05:59:34'),
(10, 'do.png', 1, '2020-03-13 05:59:34');

-- --------------------------------------------------------

--
-- Table structure for table `links`
--

CREATE TABLE `links` (
  `id` int(11) NOT NULL,
  `website_link` varchar(1024) DEFAULT NULL,
  `is_active` tinyint(1) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `links`
--

INSERT INTO `links` (`id`, `website_link`, `is_active`, `created_at`) VALUES
(1, 'https://www.rentronics.co.nz/', 1, '2020-03-13 12:00:33'),
(2, 'dsfg', 1, '2020-03-14 04:53:36');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `username` varchar(50) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `token` varchar(255) DEFAULT NULL,
  `is_active` tinyint(1) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `username`, `password`, `token`, `is_active`, `created_at`) VALUES
(1, 'Kamlesh', 'kamlesh@gmail.com', '123456', 'eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ', 1, '2020-03-03 09:32:09');

-- --------------------------------------------------------

--
-- Table structure for table `website_content`
--

CREATE TABLE `website_content` (
  `id` int(11) NOT NULL,
  `type` varchar(100) DEFAULT NULL,
  `image_id` int(11) DEFAULT NULL,
  `link_id` int(11) DEFAULT NULL,
  `title` text DEFAULT NULL,
  `content` text DEFAULT NULL,
  `is_active` tinyint(4) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `website_content`
--

INSERT INTO `website_content` (`id`, `type`, `image_id`, `link_id`, `title`, `content`, `is_active`, `created_at`, `updated_at`) VALUES
(1, 'services', 1, NULL, 'Software Product Development', 'Product development requires meeting requirements\r\n                          that are\r\n                          constantly changing.', 1, '2020-03-13 05:59:03', '2020-03-13 05:59:03'),
(2, 'services', 2, NULL, 'Web Application Development', 'Web application development is the creation of\r\n                          application\r\n                          programs that reside on remote.', 1, '2020-03-13 05:59:03', '2020-03-13 05:59:03'),
(3, 'services', 3, NULL, 'Application Migration & Re-engineering', 'Application migration is the process of moving an\r\n                          application\r\n                          program from one environment to another.', 1, '2020-03-13 05:59:03', '2020-03-13 05:59:03'),
(4, 'services', 4, NULL, 'Application Maintenance & Operation Support', 'Application maintenance is the constant updating,\r\n                          modifying and\r\n                          re-assessing.', 1, '2020-03-13 05:59:03', '2020-03-13 05:59:03'),
(5, 'services', 5, NULL, 'Enterprise Application Integration', 'Enterprise application integration is the process of\r\n                          linking such\r\n                          applications within a single organization together.', 1, '2020-03-13 05:59:03', '2020-03-13 05:59:03'),
(6, 'services', 6, NULL, 'Client - Server Application Development', 'The client-server model describes how a server\r\n                          provides resources\r\n                          and services.', 1, '2020-03-13 05:59:03', '2020-03-13 05:59:03'),
(7, 'services', 7, NULL, 'On-Premise and Cloud Application Development ', 'A web based app means that it uses web technologies\r\n                          to interact with\r\n                          the user.', 1, '2020-03-13 05:59:03', '2020-03-13 05:59:03'),
(8, 'services', 8, NULL, 'Mobile Apps Development with iOS & Android', 'Mobile application development is the process of\r\n                          creating software\r\n                          applications that run on a mobile.', 1, '2020-03-13 05:59:03', '2020-03-13 05:59:03'),
(9, 'services', 8, NULL, 'Mobile Apps Development with iOS & Android', 'Mobile application development is the process of\r\n                          creating software\r\n                          applications that run on a mobile.', 1, '2020-03-13 05:59:03', '2020-03-13 05:59:03'),
(10, 'technology', NULL, NULL, 'Microsoft.Net', '.NET Framework is a software framework developed by Microsoft that runs primarily on Microsoft.', 1, '2020-03-13 08:51:06', '2020-03-13 08:51:06'),
(11, 'technology', NULL, NULL, 'Java', 'Java is a general-purpose programming language that is class-based, object-oriented, and designed to have as few implementation. ', 1, '2020-03-13 08:55:54', '2020-03-13 08:55:54'),
(12, 'technology', NULL, NULL, 'Salesforce', 'Salesforce is the primary enterprise offering within the Salesforce platform.', 1, '2020-03-13 08:57:41', '2020-03-13 08:57:41'),
(13, 'technology', NULL, NULL, 'Android ', 'Android is a mobile operating system based on a modified version of the Linux kernel and other open source software', 1, '2020-03-13 08:57:41', '2020-03-13 08:57:41'),
(14, 'technology', NULL, NULL, 'hitachivantara (pentaho) ', 'Hitachi Vantara mainly offers storage solutions for enterprises and midsize organizations.', 1, '2020-03-13 09:00:44', '2020-03-13 09:00:44'),
(15, 'technology', NULL, NULL, 'Python ', 'Python is an interpreted, high-level, general-purpose programming language.', 1, '2020-03-13 09:00:44', '2020-03-13 09:00:44'),
(16, 'technology', NULL, NULL, 'Nodejs', 'Node.js is an open-source, cross-platform, JavaScript runtime environment', 1, '2020-03-13 09:01:42', '2020-03-13 09:01:42'),
(17, 'technology', NULL, NULL, 'Other technology ', 'Technology is the sum of techniques, skills, methods, and processes used in the production of goods.', 1, '2020-03-13 09:01:42', '2020-03-13 09:01:42'),
(18, 'about', NULL, NULL, 'Quality is our top Priority', 'A1 Abilities has been contrived with the main motto of enhancing the quality of living and businesses. We consistently endeavor to develop software which are tailored finely as per the needs of our client community', 1, '2020-03-13 09:47:22', '2020-03-13 09:47:22'),
(19, 'about', NULL, NULL, 'On-Time Delivery', NULL, 1, '2020-03-13 09:56:56', '2020-03-13 09:56:56'),
(20, 'about', NULL, NULL, 'Customer-Oriented Approach ', NULL, 1, '2020-03-13 09:56:56', '2020-03-13 09:56:56'),
(21, 'about', NULL, NULL, 'Clear and Transparent Process ', NULL, 1, '2020-03-13 09:57:31', '2020-03-13 09:57:31'),
(22, 'goals', NULL, NULL, 'To Excel our Technical Expertise', 'We aim to be best in our technical knowledge and serve our clients with complete dedication. ', 1, '2020-03-13 10:29:49', '2020-03-13 10:29:49'),
(23, 'goals', NULL, NULL, 'To Take Up Challenges', 'We love to take difficult and challenging projects to test and prove our technical potential. ', 1, '2020-03-13 10:29:49', '2020-03-13 10:29:49'),
(24, 'goals', NULL, NULL, 'To Stand Out of Croud', 'We\'re different from our competitors and want our clients to be different from theirs.', 1, '2020-03-13 10:34:03', '2020-03-13 10:34:03'),
(25, 'goals', NULL, NULL, 'To Stay Client-Focused', 'We strive to provide first-class service and bring a more personal approach to the project development', 1, '2020-03-13 10:34:03', '2020-03-13 10:34:03'),
(26, 'whyus', NULL, NULL, 'Efficient Developers', 'Our expert developers build highly efficient web solutions using a robust web development framework that meets all Client Business .', 1, '2020-03-13 10:47:28', '2020-03-13 10:47:28'),
(27, 'whyus', NULL, NULL, 'Management & Comm.', 'Whether it is long term collaboration or just a small project,communication and our project management .', 1, '2020-03-13 10:47:28', '2020-03-13 10:47:28'),
(28, 'whyus', NULL, NULL, 'Trusted Web Solution', 'Our pragmatic approach and proven methodology in developing customized web pages have offered trusted web solutions ', 1, '2020-03-13 10:49:17', '2020-03-13 10:49:17'),
(29, 'whyus', NULL, NULL, '100% Code Safe', 'We guarantee the 100% legal protection of our clients and for every project we sign a non-disclosure agreement before we start initial analysis. ', 1, '2020-03-13 10:49:17', '2020-03-13 10:49:17'),
(30, 'partners', NULL, NULL, NULL, NULL, 1, '2020-03-13 12:01:37', '2020-03-13 12:01:37');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `links`
--
ALTER TABLE `links`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `website_content`
--
ALTER TABLE `website_content`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contact`
--
ALTER TABLE `contact`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `images`
--
ALTER TABLE `images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `links`
--
ALTER TABLE `links`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `website_content`
--
ALTER TABLE `website_content`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
