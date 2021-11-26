import { BindingScopeEnum, Container, interfaces } from 'inversify';

export class DiContainer {
  private static container = new Container({
    defaultScope: BindingScopeEnum.Singleton,
  });

  public static register<IDependency>(
    serviceIdentifier: interfaces.ServiceIdentifier<IDependency>,
    value: new (...args: never[]) => IDependency,
  ): void {
    DiContainer.container.bind(serviceIdentifier).to(value);
  }

  public static get<IDependency>(serviceIdentifier: interfaces.ServiceIdentifier<IDependency>): IDependency {
    return DiContainer.container.get(serviceIdentifier);
  }
}
