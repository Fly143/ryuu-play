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

export class JirachiGX_79 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 160;
    public height?: number = 0.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Psychic Zone", powerType: PowerType.ABILITY, text: "Don't apply Psychic Weakness when Pokémon (both yours and your opponent's) take damage from attacks.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Star Search", cost: [], damage: "", text: "Search your deck for an Energy card and attach it to 1 of your Psychic Pokémon. Then, shuffle your deck." },
      { name: "Star Shield-GX", cost: [], damage: "100", text: "Prevent all effects of attacks, including damage, done to this Pokémon during your opponent's next turn. (You can't use more than 1 GX attack in a game.)" }
  ];
  public set: string = "CEC";
  public name: string = "Jirachi-GX";
  public fullName: string = "Jirachi-GX CEC 79";
  public text: string = "Jirachi-GX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.searchEnergyToSelf(this, store, state, effect).use(effect, 1);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.gxOncePerGame(this, store, state, effect).use(effect);
    }
    return state;
  }
}
