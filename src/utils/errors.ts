export function notFoundError(entity: string) {
  return {
    type: "error_not_found",
    message: `Could not find ${entity}`,
  };
}

export function unauthorized(entity: string) {
  return {
    type: "error_unauthorized",
    message: `bad ${entity} authorization`,
  };
}

export function duplicateError(entity: string) {
  return {
    type: "error_duplicate",
    message: `${entity} already exists`,
  };
}

export function badRequest(entity: string) {
  return {
    type: "error_bad_request",
    message: `${entity} is in a incorrect format`,
  };
}

export function spoonacularError() {
  return {
    type: "Internal error",
    message: "Internal error",
  };
}
