# 1. What is Shadow DOM?

**Answer:**

Shadow DOM is a web standard that provides **encapsulation** by attaching a hidden DOM tree to a host element. It isolates component structure, styles, and behavior from the main DOM.

**Example:**

```html
<custom-input>
  #shadow-root (open)
  <input id="username" />
</custom-input>
```

Internal elements are not accessible directly using normal selectors.

---

# 2. Why cy.get() cannot access Shadow DOM elements?

**Answer:**

Because Shadow DOM creates a separate DOM tree, Cypress cannot access shadow elements directly.

❌ This will fail:

```javascript
cy.get("#username");
```

✅ Correct way:

```javascript
cy.get("custom-input").shadow().find("#username");
```

---

# 3. How to handle Shadow DOM in Cypress?

**Answer:**

Using:

- `.shadow()` command
- `includeShadowDom: true` option

Example:

```javascript
cy.get("custom-input").shadow().find("#username").type("Krishna");
```

---

# 4. What is shadow host?

**Answer:**

Shadow host is the element that contains the shadow root.

Example:

```html
<custom-input>
  ← shadow host #shadow-root
  <input />
</custom-input>
```

Cypress example:

```javascript
cy.get("custom-input").shadow();
```

---

# 5. How to handle nested shadow DOM?

Example HTML:

```html
<parent-component>
  #shadow-root
  <child-component>
    #shadow-root
    <input id="email" /></child-component
></parent-component>
```

Cypress:

```javascript
cy.get("parent-component")
  .shadow()
  .find("child-component")
  .shadow()
  .find("#email")
  .type("test@email.com");
```

---

# 6. How to enable includeShadowDom globally?

In cypress.config.js:

```javascript
module.exports = {
  e2e: {
    includeShadowDom: true,
  },
};
```

Then use:

```javascript
cy.get("#email").type("test@email.com");
```

---

# 7. Can Cypress handle closed Shadow DOM?

**Answer: No ❌**

Closed shadow DOM cannot be accessed.

Example:

```javascript
element.attachShadow({ mode: "closed" });
```

Cypress cannot automate this.

---

# 8. Real-world example (Salesforce login)

Salesforce uses Shadow DOM extensively.

HTML:

```html
<login-form>
  #shadow-root
    <input id="username">
    <button id="login">
</login-form>
```

Cypress:

```javascript
cy.get("login-form").shadow().find("#username").type("Krishna");

cy.get("login-form").shadow().find("#login").click();
```

---

# 9. How to click element inside shadow DOM?

```javascript
cy.get("custom-button").shadow().find("button").click();
```

---

# 10. How to verify text inside shadow DOM?

HTML:

```html
<custom-label>
  #shadow-root
  <span id="message">Login Successful</span>
</custom-label>
```

Cypress:

```javascript
cy.get("custom-label")
  .shadow()
  .find("#message")
  .should("have.text", "Login Successful");
```

---

# Real-time enterprise example

Example: Material UI checkbox

HTML:

```html
<mwc-checkbox>
  #shadow-root
  <input type="checkbox" />
</mwc-checkbox>
```

Cypress:

```javascript
cy.get("mwc-checkbox").shadow().find("input").check();
```

---

# Advanced interview example (best answer)

```javascript
cy.get("parent-component")
  .shadow()
  .find("child-component")
  .shadow()
  .find("#input")
  .should("be.visible")
  .type("Test data");
```

---

# Interview Pro Tips (Very Important)

Say these points in interview:

- Shadow DOM provides encapsulation
- Cypress supports open shadow DOM
- Use `.shadow()` command
- Use includeShadowDom option
- Closed shadow DOM cannot be automated
- Common in Salesforce, Material UI, Web Components

---

# Most impressive interview answer (2–3 lines)

**Shadow DOM is an encapsulated DOM attached to a host element, which isolates component structure and styles. Cypress handles Shadow DOM using `.shadow()` command or `includeShadowDom` option to access and interact with elements inside the shadow root.**

Example:

```javascript
cy.get("custom-element").shadow().find("#input").type("Hello");
```
