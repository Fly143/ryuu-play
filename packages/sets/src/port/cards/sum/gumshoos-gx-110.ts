import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
  Attack,
  CardType,
  PokemonCard,
  Power,
  PowerType,
  Stage,
  Weakness,
  Resistance,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class GumshoosGX_110 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Yungoos";
  public hp: number = 210;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Search the Premises", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may have your opponent reveal their hand.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Headbutt Bounce", cost: [], damage: "100", text: "" },
      { name: "Gumshoe Chance-GX", cost: [], damage: "10+", text: "This attack does 50 damage times the amount of Energy attached to your opponent's Active Pokémon. (You can't use more than 1 GX attack in a game.)" }
  ];
  public set: string = "SUM";
  public name: string = "Gumshoos-GX";
  public fullName: string = "Gumshoos-GX SUM 110";
  public text: string = "Gumshoos-GX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.gxOncePerGame(this, store, state, effect).use(effect);
    }
    return state;
  }
}
