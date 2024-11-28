# Trabajo Práctico N° 2 - Sprint 3 [Nodo Tecnológico]

## Descripción
API desarrollada para gestionar superhéroes, cumpliendo con las validaciones requeridas en el TP2 del Sprint 3.

### Validaciones Implementadas:
1. **`nombreSuperHeroe`**:
   - Obligatorio.
   - Sin espacios en blanco (trim).
   - Longitud: mínimo 3 caracteres, máximo 60.

2. **`nombreReal`**:
   - Obligatorio.
   - Sin espacios en blanco (trim).
   - Longitud: mínimo 3 caracteres, máximo 60.

3. **`edad`**:
   - Obligatoria.
   - Número positivo (≥ 0).

4. **`poderes`**:
   - Obligatorio.
   - Array de strings no vacío.
   - Cada string: longitud mínima 3 caracteres, máxima 60.

## Endpoints Disponibles
1. **GET /api/heroes** - Obtener todos los superhéroes.
2. **GET /api/heroes/:id** - Obtener un superhéroe por ID.
3. **POST /api/heroes** - Crear un nuevo superhéroe.
4. **PUT /api/heroes/:id** - Actualizar un superhéroe por ID.
5. **DELETE /api/heroes/:id** - Eliminar un superhéroe por ID.

## Requisitos para Ejecutar el Proyecto
1. Node.js instalado.
2. MongoDB configurado.
3. Clonar el repositorio.

## Autor
- Desarrollado por Lucas Nieto ✨