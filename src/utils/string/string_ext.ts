export {}; // Mark file as module

declare global {
  interface String {
    isEmpty(): boolean;
    isNotEmpty(): boolean;
  }
}

String.prototype.isEmpty = function (): boolean {
  return this.trim().length === 0;
};

String.prototype.isNotEmpty = function (): boolean {
  return !this.isEmpty();
};
