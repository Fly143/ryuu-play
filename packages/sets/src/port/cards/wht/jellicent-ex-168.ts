import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
  PowerEffect,
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

export class JellicentEx_168 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Frillish";
  public hp: number = 270;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Oceanic Curse", powerType: PowerType.ABILITY, text: "As long as this Pokémon is in the Active Spot, your opponent can't play any Item cards or Pokémon Tool cards from their hand.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Power Press", cost: [], damage: "80+", text: "If this Pokémon has at least 2 extra Energy attached (in addition to this attack's cost), this attack does 80 more damage." }
  ];
  public set: string = "WHT";
  public name: string = "Jellicent ex";
  public fullName: string = "Jellicent ex WHT 168";
  public text: string = "Jellicent ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 80, 1);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
