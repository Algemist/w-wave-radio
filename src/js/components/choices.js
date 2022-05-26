const element = document.getElementById('broadcast-select');
if (element) {
  const choices = new Choices(element, {
    searchEnabled: false,
    allowHTML: true,
    itemSelectText: '',
  });
}
