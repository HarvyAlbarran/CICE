-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 27-07-2023 a las 21:35:47
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `consultoria_cice`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tm_detallepartes`
--

CREATE TABLE `tm_detallepartes` (
  `partd_id` int(11) NOT NULL,
  `part_id` int(11) NOT NULL,
  `partd_obs` varchar(255) NOT NULL,
  `partd_file` varchar(255) NOT NULL,
  `fech_crea` date NOT NULL,
  `est` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `tm_detallepartes`
--

INSERT INTO `tm_detallepartes` (`partd_id`, `part_id`, `partd_obs`, `partd_file`, `fech_crea`, `est`) VALUES
(1, 28, 'Observación 1', '516637700.pdf', '2023-05-30', 1),
(2, 28, 'observacion 2', '1452582334.pdf', '2023-05-30', 1),
(3, 31, 'prueba de observacion 17.07.2023\r\n', '1316669615.pdf', '2023-07-17', 1),
(4, 34, 'observacion 1', '57414969.docx', '2023-07-17', 1),
(5, 34, 'observacion 2', '590794111.pdf', '2023-07-17', 1),
(6, 34, 'aaaa', '1231433283.docx', '2023-07-17', 1),
(7, 0, 'observacion1', '1032175876.pdf', '2023-07-22', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tm_empresas`
--

CREATE TABLE `tm_empresas` (
  `emp_id` int(11) NOT NULL,
  `emp_nombre` varchar(150) NOT NULL,
  `emp_ruc` varchar(50) DEFAULT NULL,
  `emp_correo` text DEFAULT NULL,
  `emp_descripcion` varchar(150) DEFAULT NULL,
  `emp_direccion` text DEFAULT NULL,
  `emp_representante` varchar(100) DEFAULT NULL,
  `fech_crea` date DEFAULT NULL,
  `fech_visto` date DEFAULT NULL,
  `fech_resp` date DEFAULT NULL,
  `est` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `tm_empresas`
--

INSERT INTO `tm_empresas` (`emp_id`, `emp_nombre`, `emp_ruc`, `emp_correo`, `emp_descripcion`, `emp_direccion`, `emp_representante`, `fech_crea`, `fech_visto`, `fech_resp`, `est`) VALUES
(1, 'dfhgfdh', 'fdhfdh', 'fdhfd', 'fdhfd', 'dfhfd', '0', '2023-07-17', NULL, NULL, 2),
(2, 'jgfjgfj', 'gjfgjfg', 'gfjfgj', 'fgjgfj', 'fgjfgjfgj', '0', '2023-07-17', NULL, NULL, 2),
(3, 'sdfgdsg', 'dsgsdg', 'dsgdsg', 'dsgdsg', 'sdgsdg', '0', '2023-07-17', NULL, NULL, 2),
(4, 'dsgds', 'dsgdsg', 'gdsgds', 'dsgdsg', 'sdgdsg', '0', '2023-07-17', NULL, NULL, 2),
(5, 'adsgdsg', 'bdsdsgds', 'cdgsdg', 'dgdsg', 'ffsdfds', '0', '2023-07-17', NULL, NULL, 2),
(6, 'afdgdfg', 'bdsgdf', 'cdfghfdh', 'dhfdr', 'enghd', '0', '2023-07-17', NULL, NULL, 2),
(7, 'agdsg', 'bdfds', 'cdsfgsd', 'dddd', 'eee', '0', '2023-07-17', NULL, NULL, 2),
(8, 'ghjhgj', 'ghjkhgk', 'gkhghk', 'ghkhgk', NULL, NULL, '2023-07-17', NULL, NULL, 2),
(9, 'jklj', 'jlk', 'jlkl', 'jlklj', '22222222', '1111111', '2023-07-17', NULL, NULL, 2),
(10, 'khkhk', 'hjhjk', 'jhkjhk', 'hjkjhkhj', 'hjkjhk', 'hhhhtrr', '2023-07-17', NULL, NULL, 2),
(11, 'aaaa', 'bbb', 'ccc', 'ddd', 'eee', 'fffff', '2023-07-17', NULL, NULL, 2),
(12, 'empresa1', '10123658', 'empresa1@gmail.com', 'descripcion1', 'direccion1', 'Julio Perez', '2023-07-20', NULL, NULL, 1),
(13, 'empresa2', '15085689', 'empresa2@gmail.com', 'descripcion2', 'direccion2', 'Javier Delgado', '2023-07-20', NULL, NULL, 1),
(14, 'empresa3', '10683895', 'empresa3@gmail.com', 'descripcion3', 'direccion3', 'Maria Martinez', '2023-07-20', NULL, NULL, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tm_estado`
--

CREATE TABLE `tm_estado` (
  `est_id` int(11) NOT NULL,
  `est_nom` varchar(100) DEFAULT NULL,
  `fech_crea` date DEFAULT NULL,
  `fech_visto` date DEFAULT NULL,
  `fech_resp` date DEFAULT NULL,
  `est` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `tm_estado`
--

INSERT INTO `tm_estado` (`est_id`, `est_nom`, `fech_crea`, `fech_visto`, `fech_resp`, `est`) VALUES
(1, 'Registrado', '2023-07-19', NULL, NULL, 1),
(2, 'Enviado', '2023-07-19', NULL, NULL, 1),
(3, 'Aprobado', '2023-07-20', NULL, NULL, 1),
(4, 'Rechazado', '2023-07-25', NULL, NULL, 1),
(5, 'estado5sss', '2023-07-25', NULL, NULL, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tm_menu`
--

CREATE TABLE `tm_menu` (
  `men_id` int(11) NOT NULL,
  `men_ruta` varchar(150) NOT NULL,
  `men_icon` varchar(50) NOT NULL,
  `men_nom` varchar(150) NOT NULL,
  `est` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `tm_menu`
--

INSERT INTO `tm_menu` (`men_id`, `men_ruta`, `men_icon`, `men_nom`, `est`) VALUES
(0, '../Home/', 'si si-puzzle', 'Inicio', 1),
(1, '../NuevoRegistro/', 'si si-compass', 'Módulo de Registro', 1),
(2, '../ConsultarStatus/', 'si si-puzzle', 'Módulo de  COnsultas', 1),
(4, '../MantenimientoEmpresa/', 'si si-puzzle', 'Empresa', 1),
(5, '../MantenimientoTipo/', 'si si-puzzle', 'Tipos Licitación', 1),
(6, '../MantenimientoProceso/', 'si si-puzzle', 'Procesos', 1),
(7, '../MantenimientoEstado/', 'si si-puzzle', 'Estado', 1),
(8, '../MantenimientoUsuario/', 'si si-puzzle', 'Usuarios', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tm_partes`
--

CREATE TABLE `tm_partes` (
  `part_id` int(11) NOT NULL,
  `usu_id` int(11) NOT NULL,
  `part_asun` varchar(250) DEFAULT NULL,
  `part_presu` double DEFAULT NULL,
  `part_desc` varchar(500) DEFAULT NULL,
  `emp_id` int(11) DEFAULT NULL,
  `est_id` int(11) DEFAULT NULL,
  `proc_id` int(11) DEFAULT NULL,
  `tip_id` int(11) DEFAULT NULL,
  `fech_inicio` date DEFAULT NULL,
  `fech_fin` date DEFAULT NULL,
  `fech_crea` date DEFAULT NULL,
  `fech_visto` date DEFAULT NULL,
  `fech_resp` date DEFAULT NULL,
  `est` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `tm_partes`
--

INSERT INTO `tm_partes` (`part_id`, `usu_id`, `part_asun`, `part_presu`, `part_desc`, `emp_id`, `est_id`, `proc_id`, `tip_id`, `fech_inicio`, `fech_fin`, `fech_crea`, `fech_visto`, `fech_resp`, `est`) VALUES
(1, 1, 'prueba de licitacion', 45120, 'descripción de prueba', 12, 2, 0, 0, '0000-00-00', '0000-00-00', '2023-05-30', NULL, NULL, 1),
(2, 1, NULL, NULL, NULL, 0, 0, 0, 0, NULL, NULL, '2023-05-30', NULL, NULL, 2),
(3, 1, NULL, NULL, NULL, 0, 0, 0, 0, NULL, NULL, '2023-05-30', NULL, NULL, 2),
(4, 1, NULL, NULL, NULL, 0, 0, 0, 0, NULL, NULL, '2023-05-30', NULL, NULL, 2),
(5, 1, 'qqqqqqqqqqqqqqq', 1215, 'qqqqqqqqqqqqqqqqqqqq', 0, 0, 0, 0, NULL, NULL, '2023-05-30', NULL, NULL, 2),
(6, 1, NULL, NULL, NULL, 0, 0, 0, 0, NULL, NULL, '2023-05-30', NULL, NULL, 2),
(7, 1, NULL, NULL, NULL, 0, 0, 0, 0, NULL, NULL, '2023-05-30', NULL, NULL, 2),
(8, 1, NULL, NULL, NULL, 0, 0, 0, 0, NULL, NULL, '2023-05-30', NULL, NULL, 2),
(9, 1, 'w', 4, 'ww', 0, 0, 0, 0, NULL, NULL, '2023-05-30', NULL, NULL, 2),
(10, 1, NULL, NULL, NULL, 0, 0, 0, 0, NULL, NULL, '2023-05-30', NULL, NULL, 2),
(11, 1, NULL, NULL, NULL, 0, 0, 0, 0, NULL, NULL, '2023-05-30', NULL, NULL, 2),
(12, 1, NULL, NULL, NULL, 0, 0, 0, 0, NULL, NULL, '2023-05-30', NULL, NULL, 2),
(13, 1, NULL, NULL, NULL, 0, 0, 0, 0, NULL, NULL, '2023-05-30', NULL, NULL, 2),
(14, 1, NULL, NULL, NULL, 0, 0, 0, 0, NULL, NULL, '2023-05-30', NULL, NULL, 2),
(15, 1, 'asdas', 7777, 'asdasd', 0, 0, 0, 0, NULL, NULL, '2023-05-30', NULL, NULL, 2),
(16, 1, NULL, NULL, NULL, 0, 0, 0, 0, NULL, NULL, '2023-05-30', NULL, NULL, 2),
(17, 1, NULL, NULL, NULL, 0, 0, 0, 0, NULL, NULL, '2023-05-30', NULL, NULL, 2),
(18, 1, NULL, NULL, NULL, 0, 0, 0, 0, NULL, NULL, '2023-05-30', NULL, NULL, 2),
(19, 1, NULL, NULL, NULL, 0, 0, 0, 0, NULL, NULL, '2023-05-30', NULL, NULL, 2),
(20, 1, NULL, NULL, NULL, 0, 0, 0, 0, NULL, NULL, '2023-05-30', NULL, NULL, 2),
(21, 1, NULL, NULL, NULL, 0, 0, 0, 0, NULL, NULL, '2023-05-30', NULL, NULL, 2),
(22, 1, NULL, NULL, NULL, 0, 0, 0, 0, NULL, NULL, '2023-05-30', NULL, NULL, 2),
(23, 1, NULL, NULL, NULL, 0, 0, 0, 0, NULL, NULL, '2023-05-30', NULL, NULL, 2),
(24, 1, NULL, NULL, NULL, 0, 0, 0, 0, NULL, NULL, '2023-05-30', NULL, NULL, 2),
(25, 1, NULL, NULL, NULL, 0, 0, 0, 0, NULL, NULL, '2023-05-30', NULL, NULL, 2),
(26, 1, NULL, NULL, NULL, 0, 0, 0, 0, NULL, NULL, '2023-05-30', NULL, NULL, 2),
(27, 1, NULL, NULL, NULL, 0, 0, 0, 0, NULL, NULL, '2023-05-30', NULL, NULL, 2),
(28, 1, 'licitación 1', 4550, 'descripción de prueba', 14, 1, 0, 0, '0000-00-00', '0000-00-00', '2023-05-30', NULL, NULL, 1),
(29, 1, NULL, NULL, NULL, 0, 0, 0, 0, NULL, NULL, '2023-05-30', NULL, NULL, 2),
(30, 1, NULL, NULL, NULL, 0, 0, 0, 0, NULL, NULL, '2023-05-30', NULL, NULL, 2),
(31, 1, 'Nuevo Asunto', 150, 'Descripcion prueba', 13, 3, 0, 0, '0000-00-00', '0000-00-00', '2023-07-17', NULL, NULL, 1),
(32, 1, NULL, NULL, NULL, 0, 0, 0, 0, NULL, NULL, '2023-07-17', NULL, NULL, 2),
(33, 1, NULL, NULL, NULL, 0, 0, 0, 0, NULL, NULL, '2023-07-17', NULL, NULL, 2),
(34, 1, 'harvy', 21, 'harvyyyyyyyyyyyyyyyyyyyyy', 0, 0, 0, 0, NULL, NULL, '2023-07-17', NULL, NULL, 2),
(35, 1, NULL, NULL, NULL, 0, 0, 0, 0, NULL, NULL, '2023-07-17', NULL, NULL, 2),
(36, 1, NULL, NULL, NULL, 0, 0, 0, 0, NULL, NULL, '2023-07-17', NULL, NULL, 2),
(37, 1, NULL, NULL, NULL, 0, 0, 0, 0, NULL, NULL, '2023-07-17', NULL, NULL, 2),
(38, 1, NULL, NULL, NULL, 0, 0, 0, 0, NULL, NULL, '2023-07-17', NULL, NULL, 2),
(39, 1, NULL, NULL, NULL, 0, 0, 0, 0, NULL, NULL, '2023-07-17', NULL, NULL, 2),
(40, 1, NULL, NULL, NULL, 0, 0, 0, 0, NULL, NULL, '2023-07-17', NULL, NULL, 2),
(41, 1, NULL, NULL, NULL, 0, 0, 0, 0, NULL, NULL, '2023-07-17', NULL, NULL, 2),
(42, 1, NULL, NULL, NULL, 0, 0, 0, 0, NULL, NULL, '2023-07-17', NULL, NULL, 2),
(43, 1, NULL, NULL, NULL, 0, 0, 0, 0, NULL, NULL, '2023-07-17', NULL, NULL, 2),
(44, 1, NULL, NULL, NULL, 0, 0, 0, 0, NULL, NULL, '2023-07-17', NULL, NULL, 2),
(45, 1, NULL, NULL, NULL, 0, 0, 0, 0, NULL, NULL, '2023-07-17', NULL, NULL, 2),
(46, 1, NULL, NULL, NULL, 0, 0, 0, 0, NULL, NULL, '2023-07-17', NULL, NULL, 2),
(47, 1, NULL, NULL, NULL, 0, 0, 0, 0, NULL, NULL, '2023-07-17', NULL, NULL, 2),
(48, 1, NULL, NULL, NULL, 0, 0, 0, 0, NULL, NULL, '2023-07-17', NULL, NULL, 2),
(49, 1, NULL, NULL, NULL, 0, 0, 0, 0, NULL, NULL, '2023-07-17', NULL, NULL, 2),
(50, 1, NULL, NULL, NULL, 0, 0, 0, 0, NULL, NULL, '2023-07-17', NULL, NULL, 2),
(51, 1, NULL, NULL, NULL, 0, 0, 0, 0, NULL, NULL, '2023-07-17', NULL, NULL, 2),
(52, 1, NULL, NULL, NULL, 0, 0, 0, 0, NULL, NULL, '2023-07-17', NULL, NULL, 2),
(53, 1, NULL, NULL, NULL, 0, 0, 0, 0, NULL, NULL, '2023-07-17', NULL, NULL, 2),
(54, 1, NULL, NULL, NULL, 0, 0, 0, 0, NULL, NULL, '2023-07-17', NULL, NULL, 2),
(55, 1, NULL, NULL, NULL, 0, 0, 0, 0, NULL, NULL, '2023-07-17', NULL, NULL, 2),
(56, 1, NULL, NULL, NULL, 0, 0, 0, 0, NULL, NULL, '2023-07-17', NULL, NULL, 2),
(57, 1, NULL, NULL, NULL, 0, 0, 0, 0, NULL, NULL, '2023-07-17', NULL, NULL, 2),
(58, 1, NULL, NULL, NULL, 0, 0, 0, 0, NULL, NULL, '2023-07-17', NULL, NULL, 2),
(59, 1, NULL, NULL, NULL, 0, 0, 0, 0, NULL, NULL, '2023-07-17', NULL, NULL, 2),
(60, 1, NULL, NULL, NULL, 0, 0, 0, 0, NULL, NULL, '2023-07-19', NULL, NULL, 2),
(61, 1, NULL, NULL, NULL, 0, 0, 0, 0, NULL, NULL, '2023-07-19', NULL, NULL, 2),
(62, 1, NULL, NULL, NULL, 0, 0, 0, 0, NULL, NULL, '2023-07-19', NULL, NULL, 2),
(63, 1, NULL, NULL, NULL, 0, 0, 0, 0, NULL, NULL, '2023-07-19', NULL, NULL, 2),
(64, 1, NULL, NULL, NULL, 0, 0, 0, 0, NULL, NULL, '2023-07-19', NULL, NULL, 2),
(65, 1, NULL, NULL, NULL, 0, 0, 0, 0, NULL, NULL, '2023-07-19', NULL, NULL, 2),
(66, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-07-22', NULL, NULL, 2),
(67, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-07-22', NULL, NULL, 2),
(68, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-07-22', NULL, NULL, 2),
(69, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-07-22', NULL, NULL, 2),
(70, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-07-22', NULL, NULL, 2),
(71, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-07-22', NULL, NULL, 2),
(72, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-07-22', NULL, NULL, 2),
(73, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-07-22', NULL, NULL, 2),
(74, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-07-22', NULL, NULL, 2),
(75, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-07-22', NULL, NULL, 2),
(76, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-07-22', NULL, NULL, 2),
(77, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-07-22', NULL, NULL, 2),
(78, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-07-22', NULL, NULL, 2),
(79, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-07-22', NULL, NULL, 2),
(80, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-07-22', NULL, NULL, 2),
(81, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-07-22', NULL, NULL, 2),
(82, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-07-22', NULL, NULL, 2),
(83, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-07-22', NULL, NULL, 2),
(84, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-07-22', NULL, NULL, 2),
(85, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-07-22', NULL, NULL, 2),
(86, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-07-22', NULL, NULL, 2),
(87, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-07-22', NULL, NULL, 2),
(88, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-07-25', NULL, NULL, 2),
(89, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-07-25', NULL, NULL, 2),
(90, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-07-25', NULL, NULL, 2),
(91, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-07-25', NULL, NULL, 2),
(92, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-07-25', NULL, NULL, 2),
(93, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-07-25', NULL, NULL, 2),
(94, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-07-25', NULL, NULL, 2),
(95, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-07-25', NULL, NULL, 2),
(96, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-07-25', NULL, NULL, 2),
(97, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-07-25', NULL, NULL, 2),
(98, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-07-25', NULL, NULL, 2),
(99, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-07-25', NULL, NULL, 2),
(100, 1, 'Asunto1', 2600, 'descripcion1', 13, 1, 1, 1, '0000-00-00', '0000-00-00', '2023-07-25', NULL, NULL, 1),
(101, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-07-25', NULL, NULL, 2),
(102, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-07-25', NULL, NULL, 2),
(103, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-07-25', NULL, NULL, 2),
(104, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-07-25', NULL, NULL, 2),
(105, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-07-25', NULL, NULL, 2),
(106, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-07-25', NULL, NULL, 2),
(107, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-07-25', NULL, NULL, 2),
(108, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-07-25', NULL, NULL, 2),
(109, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-07-25', NULL, NULL, 2),
(110, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-07-26', NULL, NULL, 2),
(111, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2023-07-26', NULL, NULL, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tm_proceso`
--

CREATE TABLE `tm_proceso` (
  `proc_id` int(11) NOT NULL,
  `proc_nom` varchar(100) DEFAULT NULL,
  `fech_crea` date DEFAULT NULL,
  `fech_visto` date DEFAULT NULL,
  `fech_resp` date DEFAULT NULL,
  `est` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `tm_proceso`
--

INSERT INTO `tm_proceso` (`proc_id`, `proc_nom`, `fech_crea`, `fech_visto`, `fech_resp`, `est`) VALUES
(1, 'proceso1', '2023-07-19', NULL, NULL, 1),
(2, 'proceso2', '2023-07-19', NULL, NULL, 1),
(3, 'proceso3', '2023-07-20', NULL, NULL, 1),
(4, 'procesossss', '2023-07-25', NULL, NULL, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tm_tipo`
--

CREATE TABLE `tm_tipo` (
  `tip_id` int(11) NOT NULL,
  `tip_nom` varchar(80) DEFAULT NULL,
  `fech_crea` date DEFAULT NULL,
  `fech_visto` date DEFAULT NULL,
  `fech_resp` date DEFAULT NULL,
  `est` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `tm_tipo`
--

INSERT INTO `tm_tipo` (`tip_id`, `tip_nom`, `fech_crea`, `fech_visto`, `fech_resp`, `est`) VALUES
(1, 'tipo1', '2023-07-18', NULL, NULL, 1),
(2, 'tipo2', '2023-07-18', NULL, NULL, 1),
(3, 'tipo3', '2023-07-20', NULL, NULL, 1),
(4, 'tipo4', '2023-07-25', NULL, NULL, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tm_usuario`
--

CREATE TABLE `tm_usuario` (
  `usu_id` int(11) NOT NULL,
  `usu_nom` varchar(150) NOT NULL,
  `usu_ape` varchar(150) NOT NULL,
  `usu_correo` varchar(150) NOT NULL,
  `usu_pass` varchar(15) NOT NULL,
  `fech_crea` date DEFAULT NULL,
  `fech_modi` date DEFAULT NULL,
  `fech_elim` date DEFAULT NULL,
  `est` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci COMMENT='Tabla Usuario';

--
-- Volcado de datos para la tabla `tm_usuario`
--

INSERT INTO `tm_usuario` (`usu_id`, `usu_nom`, `usu_ape`, `usu_correo`, `usu_pass`, `fech_crea`, `fech_modi`, `fech_elim`, `est`) VALUES
(1, 'Jesenia', 'Sempertegui', 'jesenia@gmail.com', '123456', NULL, NULL, NULL, 1),
(2, 'Javier', 'Delgado', 'delgadojavier238@gmail.com', '123456', NULL, NULL, NULL, 1),
(3, 'Harvy ', 'Albarrán', 'harvy@gmail.com', '123456', '2023-07-19', NULL, NULL, 1),
(4, 'Juancitoo', 'Perez', 'juan@gmail.commmm', '123456781', '2023-07-25', NULL, NULL, 2);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `tm_detallepartes`
--
ALTER TABLE `tm_detallepartes`
  ADD PRIMARY KEY (`partd_id`);

--
-- Indices de la tabla `tm_empresas`
--
ALTER TABLE `tm_empresas`
  ADD PRIMARY KEY (`emp_id`);

--
-- Indices de la tabla `tm_estado`
--
ALTER TABLE `tm_estado`
  ADD PRIMARY KEY (`est_id`);

--
-- Indices de la tabla `tm_menu`
--
ALTER TABLE `tm_menu`
  ADD PRIMARY KEY (`men_id`);

--
-- Indices de la tabla `tm_partes`
--
ALTER TABLE `tm_partes`
  ADD PRIMARY KEY (`part_id`);

--
-- Indices de la tabla `tm_proceso`
--
ALTER TABLE `tm_proceso`
  ADD PRIMARY KEY (`proc_id`);

--
-- Indices de la tabla `tm_tipo`
--
ALTER TABLE `tm_tipo`
  ADD PRIMARY KEY (`tip_id`);

--
-- Indices de la tabla `tm_usuario`
--
ALTER TABLE `tm_usuario`
  ADD PRIMARY KEY (`usu_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `tm_detallepartes`
--
ALTER TABLE `tm_detallepartes`
  MODIFY `partd_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `tm_empresas`
--
ALTER TABLE `tm_empresas`
  MODIFY `emp_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `tm_estado`
--
ALTER TABLE `tm_estado`
  MODIFY `est_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `tm_menu`
--
ALTER TABLE `tm_menu`
  MODIFY `men_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `tm_partes`
--
ALTER TABLE `tm_partes`
  MODIFY `part_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=112;

--
-- AUTO_INCREMENT de la tabla `tm_proceso`
--
ALTER TABLE `tm_proceso`
  MODIFY `proc_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `tm_tipo`
--
ALTER TABLE `tm_tipo`
  MODIFY `tip_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `tm_usuario`
--
ALTER TABLE `tm_usuario`
  MODIFY `usu_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
