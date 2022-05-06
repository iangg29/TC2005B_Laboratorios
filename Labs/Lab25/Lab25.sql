-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:8889
-- Tiempo de generación: 31-03-2022 a las 18:28:55
-- Versión del servidor: 5.7.34
-- Versión de PHP: 7.4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "America/Mexico_City";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `Lab15`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `operaciones_bancarias`
--

CREATE TABLE `operaciones_bancarias` (
  `NoCuenta` int(11) NOT NULL,
  `idTipo` int(11) NOT NULL,
  `Fecha` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `Monto` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `operaciones_bancarias`
--

INSERT INTO `operaciones_bancarias` (`NoCuenta`, `idTipo`, `Fecha`, `Monto`) VALUES
(1, 1, '2022-03-31 18:00:31', 1000),
(1, 2, '2022-03-31 18:16:14', 1000),
(1, 1, '2022-03-31 18:22:10', 1000),
(1, 2, '2022-03-31 18:23:33', 1000);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `operaciones_bancarias`
--
ALTER TABLE `operaciones_bancarias`
  ADD KEY `NoCuenta` (`NoCuenta`),
  ADD KEY `idTipo` (`idTipo`);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `operaciones_bancarias`
--
ALTER TABLE `operaciones_bancarias`
  ADD CONSTRAINT `operaciones_bancarias_ibfk_1` FOREIGN KEY (`NoCuenta`) REFERENCES `clientes` (`NoCuenta`),
  ADD CONSTRAINT `operaciones_bancarias_ibfk_2` FOREIGN KEY (`idTipo`) REFERENCES `tipo_movimiento` (`idTipo`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
