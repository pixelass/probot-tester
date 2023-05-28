export default function hello(name) {
  const date = new Date();
  const day = date.getDay();
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  return `Hello ${name} today is ${days[day]}`
}
