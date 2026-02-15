## What is Shadow DOM?

**Shadow DOM** is a web standard that allows developers to create **encapsulated DOM trees** attached to an element. This encapsulation hides internal elements from the main DOM, preventing CSS and JavaScript conflicts.

It is commonly used in:

- Web Components
- Modern frameworks (Angular, Salesforce LWC, Ionic, Material UI)
- Custom reusable components

---

## Why Shadow DOM is used?

Normal DOM:

```html
<input type="text" id="username" />
```

Shadow DOM example:

```html
<custom-input></custom-input>
```

Internally, `<custom-input>` contains its own hidden DOM:

```html
#shadow-root (open) <input type="text" id="username" />
```

This internal DOM is **not directly accessible using normal selectors**.

---

## Types of Shadow DOM

### 1. Open Shadow DOM ✅ (accessible)

```javascript
element.attachShadow({ mode: "open" });
```

You can access using JavaScript or Cypress.

---

### 2. Closed Shadow DOM ❌ (not accessible)

```javascript
element.attachShadow({ mode: "closed" });
```

Cannot access using Cypress or JavaScript.

---

## Problem in Cypress

Cypress normally cannot access shadow DOM elements using:

```javascript
cy.get("#username"); // ❌ will fail if inside shadow DOM
```

Because element is inside shadow root.

---

# How to handle Shadow DOM in Cypress

Cypress provides 2 main methods:

---

# Method 1: Using `.shadow()` command (Recommended)

## Example HTML

```html
<custom-input id="user">
  #shadow-root (open)
  <input type="text" id="username" />
</custom-input>
```

## Cypress Code

```javascript
cy.get("#user").shadow().find("#username").type("Krishna");
```

---

## Step-by-step explanation:

| Command            | Meaning                    |
| ------------------ | -------------------------- |
| cy.get('#user')    | Get shadow host element    |
| .shadow()          | Enter shadow DOM           |
| .find('#username') | Find element inside shadow |
| .type()            | Perform action             |

---

# Method 2: Using includeShadowDom option

You can enable globally or per command.

---

## Option A: Per command

```javascript
cy.get("#username", { includeShadowDom: true }).type("Krishna");
```

---

## Option B: Global config (cypress.config.js)

```javascript
module.exports = {
  e2e: {
    includeShadowDom: true,
  },
};
```

Then use normally:

```javascript
cy.get("#username").type("Krishna");
```

---

# Real-world example (Salesforce / Web Components)

HTML:

```html
<login-component>
  #shadow-root (open)
  <input id="email" />
  <input id="password" />
  <button id="login">Login</button>
</login-component>
```

Cypress test:

```javascript
cy.get("login-component").shadow().find("#email").type("test@email.com");

cy.get("login-component").shadow().find("#password").type("123456");

cy.get("login-component").shadow().find("#login").click();
```

---

# Handling nested Shadow DOM

Example:

```html
<parent-component>
  #shadow-root
  <child-component>
    #shadow-root
    <input id="username" /></child-component
></parent-component>
```

Cypress:

```javascript
cy.get("parent-component")
  .shadow()
  .find("child-component")
  .shadow()
  .find("#username")
  .type("Krishna");
```

---

# Interview Definition Answer (Short version)

**Shadow DOM is a browser feature that provides encapsulation by attaching a hidden DOM tree to an element, preventing external access to its internal structure. Cypress handles shadow DOM using the `.shadow()` command or `includeShadowDom` option to access and interact with elements inside the shadow root.**

---

# Interview Example Answer (Best)

Example:

```javascript
cy.get("custom-element").shadow().find("#input").type("Hello");
```

---

# Important Interview Points

Mention these to impress interviewer:

✅ Used in Web Components
✅ Provides encapsulation
✅ Cypress supports open shadow DOM only
✅ Cannot automate closed shadow DOM
✅ Use `.shadow()` command
✅ Use includeShadowDom option

---

# How to inspect shadow DOM in browser

Open DevTools → inspect element:

You will see:

```html
#shadow-root (open)
```

---

# Real interview trick question

Interviewer: Why cy.get() not working?

Answer:
Because element is inside shadow DOM, Cypress cannot access it directly. We must use `.shadow()` or `includeShadowDom: true`.

