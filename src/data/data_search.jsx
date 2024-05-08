import { property } from "../data/dataset";

export function getProperty() {
  const propertyList = property;
  return propertyList;
}

export function filterProperty(pType) {
  let filteredProperty = getProperty().filter(type => type.tipo === pType);
  return filteredProperty;
}
