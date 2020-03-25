# REACT: Scoped CSS

Der er mulighed for at køre scoped CSS når man indsætter module i sin SCSS fil.
```javascript
> Header.module.scss
```
På den måde kan man kalde de eneklte selectors direkte og REACT vil parse dem med et unikt navn:

```html
<header class={Styles.mainHeader}>
    {props.children}
</header>
```
Outputtet vil dermed blive helt unikt for denne selector og dermed kan man anvende det samme selector navn flere steder i sit projekt uden at de vil påvirke hinanden.

```html
<header class="Header_mainHeader__3Neo-"></header>
```
I ovenstående parser React klassenavnet efter modulets navn (*Header*), selector navn (*mainHeader*) og en særligt unik tilføjelse (*_3Neo-*).




