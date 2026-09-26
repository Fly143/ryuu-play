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

export class ErikaSBellsprout_38 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 40;
    public height?: number = 0.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Soak Up", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may take up to 2 Grass Energy cards attached to your other Pokémon and attach them to Erika's Bellsprout. This power can't be used if Erika's Bellsprout is Asleep, Confused, or Paralyzed.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Stretch Vine", cost: [], damage: "", text: "Choose 1 of your opponent's Benched Pokémon, and this attack does 10 damage to it. (Don't apply Weakness and Resistance for Benched Pokémon.)" }
  ];
  public set: string = "G2";
  public name: string = "Erika's Bellsprout";
  public fullName: string = "Erika's Bellsprout G2 38";
  public text: string = "Erika's Bellsprout";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.damageOneOpponent(this, store, state, effect).use(effect, 10);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
