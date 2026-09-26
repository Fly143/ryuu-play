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

export class Gengar_13 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Haunter";
  public hp: number = 90;
    public height?: number = 1.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Chaos Move", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), if your opponent has 3 or fewer Prizes, you may move 1 damage counter from 1 Pokémon (yours or your opponent's) to another (even if it would Knock Out the other Pokémon). This power can't be used if Gengar is affected by a Special Condition.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Hide in Shadows", cost: [], damage: "40", text: "Switch Gengar with 1 of your Benched Pokémon, if any." }
  ];
  public set: string = "EX";
  public name: string = "Gengar";
  public fullName: string = "Gengar EX 13";
  public text: string = "Gengar";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.switchSelf(this, store, state, effect).use(effect);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "moveDamageCounters");
    }
    return state;
  }
}
