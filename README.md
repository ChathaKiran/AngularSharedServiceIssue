# AngularSharedServiceIssue

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.3.

ISSUE: I'm learning Angular. So, I'm sure I might have got my basics wrong in this sample project. The issue is that - there are two components list-items and list-item. As the name suggests, list-items shows the list of items; and list-item is to add a new list item. When I add a list item on list-item and navigate back to list-items, the shared service's list of items has duplicate items. To put it in simple terms, when I add one list item, I see mulitiple duplicate items in the list-items.

Fixed it by adding unsubscribe.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
# AngularSharedServiceIssue
